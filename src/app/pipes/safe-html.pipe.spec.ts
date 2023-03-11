import { SanitizedHtmlPipe } from './sanitized-html.pipe';

describe('SanitizedHtmlPipe', () => {
  it('create an instance', () => {
    const pipe = new SanitizedHtmlPipe();
    expect(pipe).toBeTruthy();
  });
});
