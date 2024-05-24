function Loading() {
  return (
    <div className="flex space-x-2 justify-center items-center h-[70vh]">
      <span className="sr-only">Loading...</span>
      <div className="h-8 w-8 bg-red-600 rounded-full animate-bounce [animation-delay:-0.3s]" />
      <div className="h-8 w-8 bg-red-600 rounded-full animate-bounce [animation-delay:-0.15s]" />
      <div className="h-8 w-8 bg-red-600 rounded-full animate-bounce" />
    </div>
  );
}

export default Loading;
