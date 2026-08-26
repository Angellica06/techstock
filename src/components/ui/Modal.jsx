import Button from "./Button";
import { FaXmark } from "react-icons/fa6";

function Modal({
  isOpenModal,
  onClose,
  title,
  description,
  children,
  onSubmit,
  submitText = "Salvar",
  disabled,
}) {
  if (!isOpenModal) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-xl bg-surface p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">{title}</h2>

          <button
            className="cursor-pointer text-lg text-text-light"
            onClick={onClose}
          >
            <FaXmark />
          </button>
        </div>

        <p className="mt-1 text-sm text-gray-500">{description}</p>

        <hr className="text-gray-300 my-5" />

        <div className="mt-4 grid grid-cols-2 gap-4">{children}</div>

        <div className="mt-4 flex gap-3">
          <Button
            type="submit"
            className="disabled:cursor-auto disabled:bg-gray-400"
            onClick={onSubmit}
            disabled={disabled}
          >
            {submitText}
          </Button>

          <Button onClick={onClose} className="bg-red-600">
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
