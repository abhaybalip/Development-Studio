import clsx from 'clsx';

function MyComponent() {
    const isLoading = false;
    const isError = true;

    return (
        <div className={clsx('button', {
            'loading': isLoading,
            'error': isError,
            'disabled': isLoading || isError,
        })}>
            Click me
        </div>
    );
}
