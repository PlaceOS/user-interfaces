import { Component, OnInit } from "@angular/core";
import { BaseQuestionComponent } from "./base-question.component";

@Component({
    selector: 'rating',
    styles: [],
    template: `
        <div class="flex flex-col w-full p-4">
            <div class="flex flex-row items-center mb-4 space-x-2">
                <div *ngFor="let i of generateArray(question.rateMax)" 
                    class="flex justify-center items-center h-10 w-10 border rounded-full">
                    <span class="font-semibold">{{i}}</span>
                </div>
            </div>
            <div class="flex flex-col" *ngIf="!preview">
                <mat-slider
                    [max]="10" [min]="3" 
                    [thumbLabel]="true" 
                    [step]="1">
                    <input matSliderThumb [(ngModel)]="question.rateMax">
                </mat-slider>
                <span class="text-xs">Move the slider to adjust the rating options</span>
            </div>

        </div>
    `
})

export class RatingsComponent extends BaseQuestionComponent implements OnInit{

    constructor(){
        super();
    }

    ngOnInit(){
        if(!this.question.rateMax){
            this.question.rateMax = 3;
        }
    }

    generateArray(max:number){
        return Array.from({length: max}, (val, index) => (index+1));
    }


}