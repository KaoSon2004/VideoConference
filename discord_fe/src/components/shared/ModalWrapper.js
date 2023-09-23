function ModalWrapper({ children, setValue }) {
  return (
    <div className="relative w-full h-full">
      <div onClick={() => setValue(false)} className="fixed flex justify-center items-center inset-0 bg-overlay-30 z-10">
      </div>
      
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50">
        {children}
      </div>
    </div>

  );
}

export default ModalWrapper;
