"use client"

import Spinner from "@components/icons/Spinner"
import { ActionScreen, ConnectBlock } from "@components/ui"
import usePurchasedUnits from "@utils/usePurchasedUnits"
import { useAppContext } from "app/layout/context"

export default function Layout({ children }: { children: React.ReactNode }) {
  const { userData } = useAppContext()
  const { availableUnits } = usePurchasedUnits()
  const isRequiredDataFilled = userData?.name && userData?.address

  return (
    <ConnectBlock signable>
      <>
        {userData === undefined || availableUnits === undefined ? (
          <div className="flex justify-center">
            <Spinner size="h-12 w-12" />
          </div>
        ) : isRequiredDataFilled ? (
          children
        ) : (
          <ActionScreen
            title="Missing billing info"
            text="Complete your profile before requesting a job"
            buttonLabel="Go to profile"
            href="/profile/edit"
          />
        )}
      </>
    </ConnectBlock>
  )
}
