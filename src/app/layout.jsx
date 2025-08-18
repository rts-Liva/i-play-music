import UpdateDarkmode from '@/components/update-darkmode';
import '@/scss/style.scss';

export const metadata = {
  title: {
    template: '%s | iPlayMusic',
    default: 'iPlayMusic'
  },
  description: "A web-app where you can find and listen to your favourite artists and songs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}