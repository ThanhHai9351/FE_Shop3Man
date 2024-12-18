import { Separator } from "@/components/ui/separator"
import Logo from "@/components/logo/logo"

export function Footer() {
  return (
    <footer className='w-full bg-slate-200'>
      <div className='container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-5 gap-8 text-sm'>
        <Logo width={60} className={"text-slate-600"} />

        <div>
          <h4 className='font-semibold mb-4'>Company</h4>
          <ul className='space-y-2 text-gray-500'>
            <li>About Us</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Partners</li>
          </ul>
        </div>

        {/* Column 2: Resources */}
        <div>
          <h4 className='font-semibold mb-4'>Resources</h4>
          <ul className='space-y-2 text-gray-500'>
            <li>Guides</li>
            <li>Tutorials</li>
            <li>FAQ</li>
            <li>Downloads</li>
          </ul>
        </div>

        {/* Column 3: Account */}
        <div>
          <h4 className='font-semibold mb-4'>Account</h4>
          <ul className='space-y-2 text-gray-500'>
            <li>Your Account</li>
            <li>Settings</li>
            <li>Accessibility</li>
            <li>Terms</li>
          </ul>
        </div>

        {/* Column 4: Help & Feedback */}
        <div>
          <h4 className='font-semibold mb-4'>Help & Feedback</h4>
          <ul className='space-y-2 text-gray-500'>
            <li>Contact Support</li>
            <li>Get In Touch</li>
            <li>Help Articles</li>
            <li>Feedback Form</li>
          </ul>
        </div>
      </div>
      <Separator />
      {/* Copyright */}
      <div className='text-center py-4 text-gray-500 text-sm'>
        <p>Copyright © 2024 shadcn.com. All rights reserved.</p>
        <div className='flex justify-center gap-6 mt-2'>
          <a href='#' className='hover:underline'>
            Privacy Policy
          </a>
          <a href='#' className='hover:underline'>
            Terms of Service
          </a>
          <a href='#' className='hover:underline'>
            Cookies Settings
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
