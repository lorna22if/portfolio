export type CodeLanguage = 'csharp' | 'json' | 'sql'

export interface CodeSnippet {
  title: string
  language: CodeLanguage
  code: string
  fileName?: string
}

export const bookingSnippet: CodeSnippet = {
  title: 'Booking Service',
  fileName: 'BookingService.cs',
  language: 'csharp',
  code: `public class BookingService
{
    public async Task BookRoomAsync()
    {
        ValidateBooking();

        await SaveBookingAsync();

        await SendConfirmationAsync();
    }
}`,
}