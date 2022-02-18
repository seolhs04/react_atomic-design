import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import * as S from "./style";

interface ModalProps {
  children: JSX.Element;
  closeModal: () => void;
}

export default function Modal({ children, closeModal }: ModalProps) {
  const [portal, setPortal] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortal(document.getElementById("modal"));
  });

  return portal
    ? createPortal(
        <S.Background onClick={closeModal}>{children}</S.Background>,
        portal,
      )
    : null;
}
