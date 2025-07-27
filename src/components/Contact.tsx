import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';

interface ContactFieldProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  link?: string;
}

const iconMap: { [key: string]: React.ComponentType<{ size: number }> } = {
  Github,
  Linkedin,
  Mail,
};

const ContactField: React.FC<ContactFieldProps> = ({
  icon,
  title,
  content,
  link,
}) => {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        {link ? (
          <a
            href={link}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {content}
          </a>
        ) : (
          <p className="text-gray-600 dark:text-gray-300">{content}</p>
        )}
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [notification, setNotification] = useState<{
    message: string;
    type: 'success' | 'error';
  } | null>(null);

  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID || 'YOUR_SERVICE_ID';
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    console.error('EmailJS environment variables are not set correctly.');
    return null;
  }

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current || isSending) return;

    setIsSending(true);
    setNotification(null);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setNotification({
            message: 'Message sent successfully! I\'ll get back to you soon!.',
            type: 'success',
          });
          form.current?.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setNotification({
            message: 'Something\'s wrong somewhere... Please try again later.',
            type: 'error',
          });
        }
      )
      .finally(() => {
        setIsSending(false);
        setTimeout(() => {
          setNotification(null);
        }, 5000);
      });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send Me a Message
            </h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Subject of your message"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSending ? 'Sending...' : 'Send Message'} <Send size={16} />
              </button>
              {notification && (
                <div
                  className={`mt-4 p-4 rounded-lg text-center ${
                    notification.type === 'success'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {notification.message}
                </div>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <ContactField
                icon={<Mail size={20} />}
                title="Email"
                content="etomdanielex@gmail.com"
                link="mailto:etomdanielex@gmail.com"
              />
              {/* <ContactField 
                icon={<Phone size={20} />}
                title="Phone"
                content="+234 (123) 456-7890"
                link="tel:+11234567890"
              /> */}
              <ContactField
                icon={<MapPin size={20} />}
                title="Location"
                content="Lagos,Nigeria"
              />
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Connect With Me
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, index) => {
                  const IconComponent = iconMap[link.icon];
                  return IconComponent ? (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      aria-label={link.platform}
                    >
                      <IconComponent size={20} />
                    </a>
                  ) : null;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
