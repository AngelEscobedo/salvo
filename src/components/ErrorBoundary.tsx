import { Component } from 'react';

interface ErrorBoundaryState {
   hasError: boolean;
   error: Error
}

export class ErrorBoundary extends Component<{}, ErrorBoundaryState> {
   constructor(props: {}) {
      super(props);
      this.state = { hasError: false, error: { message: '', name: ''} };
   }

   static getDerivedStateFromError(error: any) {
      return { hasError: true, error };
   }

   componentDidCatch(error: any, errorInfo: any) {
      console.log('ErrorBoundary caught an error:', error, errorInfo);
   }

   render() {
      if (this.state.hasError) {
         return (
            <>
               <h1>Something went wrong.</h1>
               <pre>{this.state?.error?.message}</pre>
            </>
         );
      }
      return this.props?.children;
 }
}