import { RoomList } from '@/components/room-list'
import { CreateRoomForm } from '@/components/ui/create-room-form'

export function CreateRoom() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="grid grid-cols-2 items-start gap-8">
          <CreateRoomForm />

          <RoomList />
        </div>
      </div>
    </div>
  )
}
