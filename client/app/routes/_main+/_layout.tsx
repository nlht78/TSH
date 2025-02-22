import { Outlet } from '@remix-run/react';

import Footer from '~/components/Footer';
import HandsomeError from '~/components/HandsomeError';
import Header from '~/components/Header';

export default function MainLayout() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header shadow />

      {/* Main content */}
      <main className='flex-grow relative'>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export const ErrorBoundary = () => <HandsomeError />;
