import '@testing-library/jest-dom'
import 'jest-styled-components'
import { TextEncoder, TextDecoder } from 'util';
 
(global as any).TextEncoder = TextEncoder; 
(global as any).TextDecoder = TextDecoder as any;
