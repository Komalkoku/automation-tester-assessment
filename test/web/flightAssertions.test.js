describe('Flight Results Assertion', () => {
  it('should display flight search results', async () => {
    const results = await $$('div.flight-result-card');
    expect(results.length).toBeGreaterThan(0);
  });
});
