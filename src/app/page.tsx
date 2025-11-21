"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Music, ShoppingBag, Ticket, Users, MessageSquare, HelpCircle, Mail } from "lucide-react";

export default function KaleoPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="large"
      background="circleGradient"
      cardStyle="glass-flat"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="KALEO"
          button={{
            text: "Listen Now",
            href: "https://open.spotify.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="KALEO"
          description="Icelandic rock band bringing soulful blues and alternative rock to stages worldwide"
          buttons={[
            {
              text: "Stream Music",
              href: "https://open.spotify.com"
            },
            {
              text: "Tour Dates",
              href: "tour"
            }
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763716298370-d46eajox.jpg",
              imageAlt: "Kaleo performing live on stage"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763716299472-qlefw69t.jpg",
              imageAlt: "Band members playing instruments"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763716300903-or50v7cu.jpg",
              imageAlt: "Concert crowd enjoying Kaleo performance"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763716302032-7351smtq.jpg",
              imageAlt: "Kaleo in recording studio"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763716303057-lcf61g3r.jpg",
              imageAlt: "Live concert stage setup"
            }
          ]}
          autoplayDelay={4000}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Story"
          description={[
            "Kaleo is an Icelandic blues rock band formed in Mosfellsbær in 2012. The band consists of lead vocalist and guitarist Jökull Júlíusson, drummer Davíð Antonsson, bassist Daniel Kristjánsson, and lead guitarist Rubin Pollock.",
            "Rising from the cold landscapes of Iceland, we've brought our unique blend of folk, blues, and rock to international acclaim. Our music tells stories of adventure, love, and the raw beauty of our homeland."
          ]}
          buttons={[
            {
              text: "Read Full Story",
              href: "biography"
            }
          ]}
          showBorder={true}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Our Music"
          description="Explore our discography and musical journey"
          tag="Discography"
          tagIcon={Music}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          features={[
            {
              title: "Surface Sounds",
              description: "Our latest album featuring hit singles 'Break My Baby' and 'I Want More'",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763716305514-u9p7libk.jpg",
              imageAlt: "Surface Sounds album cover",
              button: {
                text: "Listen Now",
                href: "https://open.spotify.com"
              }
            },
            {
              title: "Studio Sessions",
              description: "Behind-the-scenes look at our creative process and recording sessions",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763716306787-atdarsi7.jpg",
              imageAlt: "Recording studio session",
              button: {
                text: "Watch Videos",
                href: "https://youtube.com"
              }
            },
            {
              title: "World Tours",
              description: "Following our journey across continents, from intimate venues to major festivals",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763716307973-snroff7c.jpg",
              imageAlt: "World tour map",
              button: {
                text: "Tour History",
                href: "tours"
              }
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Official Merchandise"
          description="Support the band with official Kaleo merchandise and music"
          tag="Shop"
          tagIcon={ShoppingBag}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          products={[
            {
              id: "vinyl-surface-sounds",
              brand: "Kaleo Official",
              name: "Surface Sounds Vinyl",
              price: "$29.99",
              rating: 5,
              reviewCount: "420",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763716308791-qj6p9oye.jpg",
              imageAlt: "Surface Sounds vinyl record",
              onProductClick: () => window.open('https://shop.kaleo.com', '_blank')
            },
            {
              id: "band-tshirt",
              brand: "Kaleo Official",
              name: "Band Logo T-Shirt",
              price: "$24.99",
              rating: 5,
              reviewCount: "186",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763716310001-3lvfbpue.jpg",
              imageAlt: "Kaleo band t-shirt",
              onProductClick: () => window.open('https://shop.kaleo.com', '_blank')
            },
            {
              id: "concert-poster",
              brand: "Kaleo Official",
              name: "Limited Tour Poster",
              price: "$19.99",
              rating: 5,
              reviewCount: "97",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763716311039-itup28nb.jpg",
              imageAlt: "Concert tour poster",
              onProductClick: () => window.open('https://shop.kaleo.com', '_blank')
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Concert Experiences"
          description="Choose your concert experience and join us live"
          tag="Tickets"
          tagIcon={Ticket}
          animationType="slide-up"
          textboxLayout="default"
          plans={[
            {
              id: "general",
              badge: "General Admission",
              badgeIcon: Users,
              price: "$45",
              subtitle: "Standard concert experience",
              buttons: [
                {
                  text: "Buy Tickets",
                  onClick: () => console.log('General tickets')
                },
                {
                  text: "More Info",
                  href: "tickets"
                }
              ],
              features: [
                "General standing area",
                "Full concert access",
                "Merchandise booth access",
                "Standard entry time"
              ]
            },
            {
              id: "vip",
              badge: "VIP Experience",
              badgeIcon: Users,
              price: "$125",
              subtitle: "Premium concert experience",
              buttons: [
                {
                  text: "Buy VIP",
                  onClick: () => console.log('VIP tickets')
                },
                {
                  text: "VIP Details",
                  href: "vip"
                }
              ],
              features: [
                "VIP standing area",
                "Early venue entry",
                "Meet & greet opportunity",
                "Exclusive merchandise",
                "VIP bar access"
              ]
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="The Band"
          description="Meet the talented musicians behind Kaleo"
          tag="Members"
          tagIcon={Users}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          textboxLayout="default"
          members={[
            {
              id: "jokull",
              name: "Jökull Júlíusson",
              role: "Lead Vocals & Guitar",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763716311978-rvtfz9d8.jpg",
              imageAlt: "Jökull Júlíusson portrait"
            },
            {
              id: "rubin",
              name: "Rubin Pollock",
              role: "Lead Guitar",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763716313088-vausa1lo.jpg",
              imageAlt: "Rubin Pollock with guitar"
            },
            {
              id: "daniel",
              name: "Daniel Kristjánsson",
              role: "Bass Guitar",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763716314318-3yx1plla.jpg",
              imageAlt: "Daniel Kristjánsson with bass"
            },
            {
              id: "david",
              name: "Davíð Antonsson",
              role: "Drums",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763716315446-9da3pnuj.jpg",
              imageAlt: "Davíð Antonsson at drums"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What People Say"
          description="Hear from fans and venues about our performances"
          tag="Reviews"
          tagIcon={MessageSquare}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          textboxLayout="default"
          testimonials={[
            {
              id: "1",
              name: "Sarah Chen",
              role: "Music Fan",
              company: "Concert Goer",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763716316428-hs94avk8.jpg",
              imageAlt: "Sarah Chen portrait"
            },
            {
              id: "2",
              name: "Mike Rodriguez",
              role: "Festival Attendee",
              company: "Music Lover",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763716317394-xkjcin4c.jpg",
              imageAlt: "Mike Rodriguez portrait"
            },
            {
              id: "3",
              name: "Emma Thompson",
              role: "Music Journalist",
              company: "Rolling Stone",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763716318515-y5ewqv3r.jpg",
              imageAlt: "Emma Thompson portrait"
            },
            {
              id: "4",
              name: "James Wilson",
              role: "Venue Manager",
              company: "Madison Square Garden",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763716319647-ir722mjo.jpg",
              imageAlt: "James Wilson portrait"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Everything you need to know about concerts, music, and the band"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          mediaPosition="left"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763716320665-i8mxf0m3.jpg"
          imageAlt="Recording studio setup"
          faqs={[
            {
              id: "1",
              title: "When is your next tour?",
              content: "We're currently planning our 2024 world tour with dates to be announced soon. Sign up for our newsletter to be the first to know about new tour dates and ticket presales."
            },
            {
              id: "2",
              title: "How can I meet the band?",
              content: "VIP ticket packages often include meet and greet opportunities. We also occasionally do fan events and album signings announced through our social media channels."
            },
            {
              id: "3",
              title: "Where can I buy official merchandise?",
              content: "Official Kaleo merchandise is available through our online store, at concert venues during our tours, and through select retail partners."
            },
            {
              id: "4",
              title: "Do you take song requests at concerts?",
              content: "While we plan our setlists in advance, we love hearing from fans and sometimes incorporate requests. Feel free to share your favorites on social media!"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Connect"
          title="Stay Updated"
          description="Get the latest news, tour dates, and exclusive content delivered to your inbox"
          tagIcon={Mail}
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive updates from Kaleo. Unsubscribe anytime."
          mediaPosition="right"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763716320665-i8mxf0m3.jpg"
          imageAlt="Recording studio equipment"
          onSubmit={(email) => console.log('Newsletter signup:', email)}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="KALEO"
          copyrightText="© 2025 | Kaleo"
          columns={[
            {
              title: "Music",
              items: [
                {
                  label: "Albums",
                  href: "discography"
                },
                {
                  label: "Singles",
                  href: "singles"
                },
                {
                  label: "Live Sessions",
                  href: "sessions"
                }
              ]
            },
            {
              title: "Live",
              items: [
                {
                  label: "Tour Dates",
                  href: "tour"
                },
                {
                  label: "Past Shows",
                  href: "archive"
                },
                {
                  label: "Venues",
                  href: "venues"
                }
              ]
            },
            {
              title: "Connect",
              items: [
                {
                  label: "Newsletter",
                  href: "newsletter"
                },
                {
                  label: "Social Media",
                  href: "https://instagram.com/kaleomusic"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            }
          ]}
          onPrivacyClick={() => console.log('Privacy policy clicked')}
        />
      </div>
    </ThemeProvider>
  );
}