const Loading = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <div>
      {isLoading && (
        <div className='flex items-center justify-center mt-2'>
          <div className='spinner-border text-blue-500' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Loading
