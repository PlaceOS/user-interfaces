import 'jest-preset-angular/setup-jest';
import '@angular/localize/init';
import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
