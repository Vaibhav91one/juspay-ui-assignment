import { Avatar } from "./shared/avatar"
import type { ContactItem } from "./types"

interface ContactItemProps {
  contact: ContactItem
}

export function ContactItemComponent({ contact }: ContactItemProps) {
  return (
    <div className="sidebar-item-container-center">
      <Avatar 
        bgColor={contact.avatar.bgColor}
        initials={contact.avatar.initials}
        image={contact.avatar.image}
      />
      <p className="sidebar-item-title-secondary">{contact.name}</p>
    </div>
  )
}

