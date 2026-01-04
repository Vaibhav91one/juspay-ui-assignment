import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"
import { ContactItemComponent } from "./contact-item"
import { contactsData } from "./data"

export function ContactsSection() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="sidebar-section-label">Contacts</SidebarGroupLabel>
      <SidebarGroupContent>
        <div className="space-y-4 p-2">
          {contactsData.map((contact) => (
            <ContactItemComponent key={contact.id} contact={contact} />
          ))}
        </div>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

