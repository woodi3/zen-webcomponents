import {defineCustomElements} from '../dist/esm/loader';
import "../src/global/app.css";

defineCustomElements();

export const parameters = {
    controls: { expanded: true }
}