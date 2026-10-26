function Container({ className, children }) {
  return (
    <div
      className={`w-full h-full max-w-340 mx-auto px-16  desktop:max-w-1169 tablet:max-w-768  mobile:max-w-350 ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;
