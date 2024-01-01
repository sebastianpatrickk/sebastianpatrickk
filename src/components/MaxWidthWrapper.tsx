import { ReactNode } from 'react';

const MaxWidthWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className='grid items-center container max-w-3xl py-3 md:py-4 gap-12 pb-10 md:pb-12'>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
