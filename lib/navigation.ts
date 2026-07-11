export type NavLink = { href: string; label: string }

export const practiceAreaLinks: NavLink[] = [
  { href: '/practice-areas/immigration-law', label: 'Immigration Law' },
  { href: '/practice-areas/criminal-law', label: 'Criminal Law' },
  { href: '/practice-areas/conveyancing', label: 'Conveyancing' },
  { href: '/practice-areas/commercial-law', label: 'Commercial Law' },
  { href: '/practice-areas/civil-litigation', label: 'Civil Litigation' },
]

export const primaryNav: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '#practice-areas', label: 'Practice Areas' },
  { href: '#principal', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export const FIRM = {
  name: 'Hussaini Law Group',
  phone: '02 8764 7885',
  phoneTel: '+61287647885',
  mobile: '0404 575 367',
  mobileTel: '+61404575367',
  email: 'info@hussainilaw.com.au',
  address: '7/37 Spencer Street, Fairfield NSW 2165',
  hoursWeekday: 'Mon – Fri: 9:00am – 5:30pm',
  hoursSaturday: 'Sat: By appointment',
  arabicName: 'مكتب الحسيني للمحاماة',
  farsiName: 'دفتر وکالت حسینی',
  social: {
    facebook: 'https://www.facebook.com/p/Hussaini-Law-Group-100066742657719/',
    instagram: 'https://www.instagram.com/hussainilaw/',
    tiktok: 'https://www.tiktok.com/@hussainilawgroup',
  },
}
