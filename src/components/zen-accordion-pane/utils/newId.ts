let lastId = 0;

export function generatePaneId() {
    lastId++;
    return `pane-${lastId}`;
}