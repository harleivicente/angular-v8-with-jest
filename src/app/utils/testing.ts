

export const findInput = (container: HTMLElement, name: string): HTMLInputElement => {
    return container.querySelector(`input[name=${name}]`);
};

export const fillInput = (inputElement: HTMLInputElement, value: string) => {
    const event = new Event('input', { bubbles: true, cancelable: false });
    inputElement.value = value;
    inputElement.dispatchEvent(event);
};

export const clickButton = (button: HTMLElement) => {
    const mouseEvent: MouseEvent = new MouseEvent('click', {
        bubbles: true,
        cancelable: false
      });
    button.dispatchEvent(mouseEvent);
};


