import styles from "./styles.module.css";

type DefaultInputProps = {
  labelText: string;
  id: string;
  type: string;
} & React.ComponentProps<"input">;

export function DefaultInput({
  labelText,
  id,
  type,
  ...props
}: DefaultInputProps) {
  return (
    <>
      <label htmlFor="input">{labelText}</label>
      <input type={type} className={styles.input} name="" id={id} {...props} />
    </>
  );
}
