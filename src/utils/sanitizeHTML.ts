export const sanitizeHTML = (html: string) => {
    return html.replace(/<[^>]*>?/gm, '');
}