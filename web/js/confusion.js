class Confusion {
    constructor(container, samples, classes, options) {
        this.samples = samples;
        this.classes = classes;
        this.size = options.size;
        this.styles = options.styles;

        this.N = classes.length + 1;
        this.cellSize = this.size / (this.N + 1);

        this.table = document.createElement('table');
        this.table.style.borderCollapse = 'collapse';
    }
}