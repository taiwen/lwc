import { LightningElement, api, track } from 'lwc';

export default class Container extends LightningElement {
    @track
    events = [];

    @api
    getEvents() {
        return this.events;
    }

    handleFocusOrBlur(event) {
        const { type, relatedTarget } = event;
        this.events.push({
            type,
            relatedTarget: relatedTarget ? relatedTarget.tagName : 'NULL',
        });
    }

    get formattedEvents() {
        return this.events.map(JSON.stringify);
    }
}
