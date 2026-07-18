import type { CodeSnippet } from '@/types/code'

export const codeSnippets: CodeSnippet[] = [
  {
    title: 'Booking Service',
    fileName: 'BookingService.cs',
    language: 'csharp',
    code: `public async Task<BookRoomResponse> BookRoomAsync(
    BookRoomRequest request)
{
    ValidateRequest(request);

    var booking = await _bookingRepository.CreateAsync(request);

    await _notificationService.SendConfirmationAsync(booking);

    return MapResponse(booking);
}`,
  },
  {
    title: 'Portfolio Analysis',
    fileName: 'PortfolioService.cs',
    language: 'csharp',
    code: `public async Task<PortfolioSummary> GetSummaryAsync(
    Guid clientId)
{
    var holdings = await _repository.GetHoldingsAsync(clientId);

    return new PortfolioSummary
    {
        TotalValue = holdings.Sum(x => x.Value),
        RiskScore = CalculateRisk(holdings)
    };
}`,
  },
  {
    title: 'Golf Availability',
    fileName: 'GolfBookingService.cs',
    language: 'csharp',
    code: `public async Task<IReadOnlyList<TeeTime>> GetAvailabilityAsync(
    DateOnly date)
{
    var response = await _golfApi.GetTeeTimesAsync(date);

    return response
        .Where(x => x.IsAvailable)
        .OrderBy(x => x.StartTime)
        .ToList();
}`,
  },
]