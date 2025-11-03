import React, { useEffect, useRef, useState } from "react";
import TextArea from "../TextArea";
import Button from "../Button";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

interface ModalProps {
  content: string;
  onDiscard: () => void;
  onSave: (params: string) => void;
}

const Modal: React.FC<ModalProps> = (props) => {
  const { t } = useTranslation();
  const { register, reset, getValues } = useForm<{ suggestion: string }>();
  const [enableEdit, setEnableEdit] = useState<boolean>(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    modalRef.current?.focus();
    reset({ suggestion: props.content });
  }, []);

  useEffect(() => {
    if (enableEdit && inputRef.current) {
      inputRef.current.focus();
    }
  }, [enableEdit]);

  return (
    <div className=" fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
      <div
        ref={modalRef}
        className=" bg-white w-[500px] p-5 rounded-xl"
        role="dialog"
        aria-modal="true"
        aria-label="Suggestion"
        tabIndex={-1}
      >
        <h2 id="modal-title" className=" text-[18px] text-center mb-3">
          Open Ai Suggestions
        </h2>
        <TextArea
          placeholder=""
          label={t("Suggestion")}
          inputProps={register("suggestion")}
          disabled={!enableEdit}
          ref={inputRef}
        />
        <div className=" flex gap-5 items-center justify-end mt-2.5">
          {enableEdit ? (
            <>
              <Button
                text={t("Cancel")}
                type={"button"}
                theme={"secondary"}
                width={"w-[80px]"}
                onClick={() => setEnableEdit(false)}
              />
              <Button
                text={t("Save")}
                type={"button"}
                theme={"primary"}
                width={"w-[80px]"}
                onClick={() => setEnableEdit(false)}
              />
            </>
          ) : (
            <>
              <Button
                text={t("Discard")}
                type={"button"}
                theme={"secondary"}
                width={"w-[80px]"}
                onClick={() => props.onDiscard()}
              />
              <Button
                text={t("Edit")}
                type={"button"}
                theme={"secondary"}
                width={"w-[80px]"}
                onClick={() => {
                  setEnableEdit(true);
                }}
              />
              <Button
                text={t("Accept")}
                type={"button"}
                theme={"primary"}
                width={"w-[80px]"}
                onClick={() => {
                  console.log(getValues("suggestion"));
                  props.onSave(getValues("suggestion"));
                }}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
