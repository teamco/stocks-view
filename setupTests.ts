import '@testing-library/jest-dom';

HTMLCanvasElement.prototype.getContext = () => ({
    drawImage: () => {},
    fillRect: () => {},
    fillText: () => {},
    strokeRect: () => {},
    strokeStyle: '',
} as any);