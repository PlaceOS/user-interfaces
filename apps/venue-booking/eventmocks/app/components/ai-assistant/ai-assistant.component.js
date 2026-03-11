angular.module('uclaEventsApp').component('aiAssistant', {
  template: `
    <div class="ai-assistant-container" ng-class="{'open': $ctrl.isOpen}">
      <!-- Floating Icon Button -->
      <button class="ai-assistant-icon" ng-click="$ctrl.toggleChat()" ng-if="!$ctrl.isOpen" aria-label="Open chat assistant">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          <path d="M8 10h.01"></path>
          <path d="M12 10h.01"></path>
          <path d="M16 10h.01"></path>
        </svg>
      </button>

      <!-- Chat Window -->
      <div class="ai-assistant-chat-window" ng-if="$ctrl.isOpen">
        <!-- Header -->
        <div class="chat-header">
          <div class="header-content">
            <div class="ai-icon"><span class="material-icons">smart_toy</span></div>
            <div class="header-text">
              <h3>UCLA Events Assistant</h3>
              <span class="status">Ready to help</span>
            </div>
          </div>
          <button class="close-btn" ng-click="$ctrl.toggleChat()" aria-label="Close chat assistant">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <!-- Chat Body -->
        <div class="chat-body">
          <!-- Welcome Message -->
          <div class="welcome-message" ng-if="$ctrl.messages.length === 0">
            <div class="welcome-icon"><span class="material-icons">waving_hand</span></div>
            <h4>Hi! I'm your UCLA Events Assistant</h4>
            <p>I can help you with event planning, venue selection, and navigating the approval process.</p>
          </div>

          <!-- Messages -->
          <div class="message-list" ng-if="$ctrl.messages.length > 0">
            <div class="message" ng-repeat="message in $ctrl.messages" ng-class="message.type + '-message'">
              <div class="message-avatar" ng-if="message.type === 'ai'"><span class="material-icons">smart_toy</span></div>
              <div class="message-content">
                <div class="message-text">{{ message.text }}</div>
                <div class="message-time">{{ message.time }}</div>
              </div>
              <div class="message-avatar" ng-if="message.type === 'user'"><span class="material-icons">person</span></div>
            </div>
          </div>

          <!-- Suggested Prompts -->
          <div class="suggested-prompts" ng-if="$ctrl.messages.length === 0">
            <p class="prompts-title">Suggested prompts:</p>
            <div class="prompt-cards">
              <button class="prompt-card" ng-repeat="prompt in $ctrl.suggestedPrompts" ng-click="$ctrl.sendPrompt(prompt)">
                <span class="prompt-icon" aria-hidden="true"><span class="material-icons">{{ prompt.icon }}</span></span>
                <span class="prompt-text">{{ prompt.text }}</span>
              </button>
            </div>
          </div>

          <!-- Loading -->
          <div class="typing-indicator" ng-if="$ctrl.isTyping" role="status" aria-label="Assistant is typing">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
          </div>
        </div>

        <!-- Chat Footer -->
        <div class="chat-footer">
          <label for="chat-input" class="sr-only">Type your message</label>
          <input type="text"
                 id="chat-input"
                 ng-model="$ctrl.userInput"
                 placeholder="Ask me anything about event planning..."
                 ng-keypress="$ctrl.handleKeyPress($event)"
                 class="chat-input">
          <button class="send-btn" ng-click="$ctrl.sendMessage()" ng-disabled="!$ctrl.userInput" aria-label="Send message">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `,
  controller: function($timeout) {
    var ctrl = this;

    ctrl.isOpen = false;
    ctrl.messages = [];
    ctrl.userInput = '';
    ctrl.isTyping = false;

    ctrl.suggestedPrompts = [
      { icon: 'place', text: 'Help me find the perfect venue' },
      { icon: 'description', text: 'What documents do I need?' },
      { icon: 'schedule', text: 'How long does approval take?' },
      { icon: 'star', text: 'Best practices for event planning' },
      { icon: 'verified_user', text: 'Explain the approval process' },
      { icon: 'lightbulb', text: 'Tips for outdoor events' }
    ];

    // AI responses based on keywords
    ctrl.aiResponses = {
      venue: 'To find the perfect venue, use our Venue Search feature! You can filter by capacity, amenities, and availability. Popular venues include Royce Hall for large events, Ackerman Grand Ballroom for conferences, and Janss Steps for outdoor gatherings. Would you like me to help you search for specific criteria?',

      documents: 'Required documents vary based on your event type:\n\n• All events: Event proposal form\n• Outdoor events: Site plan, insurance certificate\n• Events with alcohol: Liquor license, liability insurance\n• Large events (500+): Security plan, parking plan\n\nThe system will automatically tell you which documents you need based on your selections!',

      approval: 'Approval timelines depend on event complexity:\n\n• Simple events (classroom, no services): 2-3 business days\n• Standard events (AV, catering): 5-7 business days\n• Complex events (outdoor, alcohol, 500+ attendees): 10-14 business days\n\nYou can track approval progress in real-time on the "My Events" page!',

      outdoor: 'Tips for outdoor events at UCLA:\n\n1. Book early - popular spots fill up fast!\n2. Always have a rain backup plan\n3. Consider sun exposure and shade\n4. Check noise restrictions for your location\n5. Outdoor events require additional insurance\n6. Plan for parking and accessibility\n\nPopular outdoor venues: Janss Steps, Sculpture Garden, Dickson Court',

      process: 'The UCLA event approval process:\n\n1. Submit your request with all details\n2. Venue Booking reviews first (1-2 days)\n3. Parallel reviews by relevant departments:\n   • Safety & Security for security and hazard concerns\n   • Setup & Furniture for large setups\n   • AV & Production for technical needs\n   • Parking & Transport for parking coordination\n   • Event Services for insurance and permits\n4. Final approval from all stakeholders\n5. You receive confirmation!\n\nYou can track each stage in your event dashboard.',

      practices: 'Best practices for UCLA events:\n\n• Start planning 4-6 weeks ahead\n• Book venues early, especially for peak times\n• Clearly communicate capacity needs\n• Upload all documents promptly\n• Respond quickly to department questions\n• Consider accessibility for all attendees\n• Plan setup and breakdown times\n• Have emergency contacts ready'
    };

    ctrl.toggleChat = function() {
      ctrl.isOpen = !ctrl.isOpen;
    };

    ctrl.sendPrompt = function(prompt) {
      ctrl.userInput = prompt.text;
      ctrl.sendMessage();
    };

    ctrl.sendMessage = function() {
      if (!ctrl.userInput.trim()) return;

      // Add user message
      ctrl.messages.push({
        type: 'user',
        text: ctrl.userInput,
        time: ctrl.getTime()
      });

      var userMessage = ctrl.userInput.toLowerCase();
      ctrl.userInput = '';

      // Show typing indicator
      ctrl.isTyping = true;

      // Simulate AI response delay
      $timeout(function() {
        ctrl.isTyping = false;

        // Find matching response
        var response = ctrl.getAIResponse(userMessage);

        ctrl.messages.push({
          type: 'ai',
          text: response,
          time: ctrl.getTime()
        });

        // Scroll to bottom
        $timeout(function() {
          var chatBody = document.querySelector('.chat-body');
          if (chatBody) {
            chatBody.scrollTop = chatBody.scrollHeight;
          }
        }, 100);
      }, 1000 + Math.random() * 1000);
    };

    ctrl.getAIResponse = function(message) {
      // Check for keywords and return appropriate response
      if (message.includes('venue') || message.includes('find') || message.includes('space')) {
        return ctrl.aiResponses.venue;
      } else if (message.includes('document') || message.includes('upload') || message.includes('paper')) {
        return ctrl.aiResponses.documents;
      } else if (message.includes('approval') || message.includes('long') || message.includes('time') || message.includes('how long')) {
        return ctrl.aiResponses.approval;
      } else if (message.includes('outdoor') || message.includes('outside')) {
        return ctrl.aiResponses.outdoor;
      } else if (message.includes('process') || message.includes('workflow') || message.includes('explain')) {
        return ctrl.aiResponses.process;
      } else if (message.includes('practice') || message.includes('tip') || message.includes('advice')) {
        return ctrl.aiResponses.practices;
      } else {
        return "I'm here to help with UCLA event planning! I can assist with:\n\n• Finding venues\n• Understanding required documents\n• Explaining the approval process\n• Best practices for events\n• Tips for outdoor events\n\nWhat would you like to know?";
      }
    };

    ctrl.handleKeyPress = function(event) {
      if (event.keyCode === 13) { // Enter key
        ctrl.sendMessage();
      }
    };

    ctrl.getTime = function() {
      var now = new Date();
      return now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    };
  }
});