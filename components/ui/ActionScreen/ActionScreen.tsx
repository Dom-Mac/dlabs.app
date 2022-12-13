"use client"

import { Button } from "@components/ui"

export interface Props {
  title?: JSX.Element | string
  text?: JSX.Element | string
  helpText?: JSX.Element | string
  href?: string
  loading?: boolean
  external?: boolean
  targetBlank?: boolean
  buttonLabel?: string
  buttonLabelSecondary?: string
  onClick?: any
  onClickSecondary?: any
}

export default function ActionScreen({
  title,
  text,
  helpText,
  href,
  loading,
  external,
  targetBlank = true,
  buttonLabel,
  buttonLabelSecondary,
  onClick = () => null,
  onClickSecondary = () => null
}: Props) {
  return (
    <main className="w-full max-w-screen-sm mx-auto">
      <div className="flex flex-col items-center text-center">
        {title && <h1>{title}</h1>}
        {text && typeof text === "string" ? (
          <p className="py-10 sm:text-lg">{text}</p>
        ) : (
          text
        )}
        {helpText && typeof helpText === "string" ? (
          <p className="opacity-70 mb-7">{helpText}</p>
        ) : (
          helpText
        )}
        {(buttonLabel || loading) && loading ? (
          <Button loading />
        ) : href ? (
          <Button
            label={buttonLabel}
            href={href}
            external={external}
            targetBlank={targetBlank}
          />
        ) : (
          <Button label={buttonLabel} onClick={onClick} />
        )}
        {buttonLabelSecondary && (
          <p className="pt-8">
            <a className="mt-8 highlight" onClick={onClickSecondary}>
              {buttonLabelSecondary}
            </a>
          </p>
        )}
      </div>
    </main>
  )
}
