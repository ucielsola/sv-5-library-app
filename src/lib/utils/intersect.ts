let intersectionObserver: IntersectionObserver;

function createIntersectionObserver() {
    if (intersectionObserver) return;

    intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const eventName = entry.isIntersecting ? "EnterViewport" : "ExitViewport";
            entry.target.dispatchEvent(new CustomEvent(eventName));
        });
    });
}

export default function intersect(element: HTMLElement) {
    createIntersectionObserver();

    intersectionObserver.observe(element);

    return {
        destroy() {
            intersectionObserver.unobserve(element);
        },
    };
}