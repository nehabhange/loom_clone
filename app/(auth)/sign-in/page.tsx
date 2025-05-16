import Link from "next/link";
import React from "react";
import Image from "next/image";

const SignIn = () => {
  return (
    <main className="sign-in">
      <aside className="testimonial">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={32}
            height={32}
          />
          <h1>Bitcast</h1>
        </Link>
        <div className="description">
          <section>
            <figure>
              {Array.from({ length: 5 }, (_, i) => (
                <Image
                  key={i}
                  src="/assets/icons/star.svg"
                  alt="star"
                  width={20}
                  height={20}
                />
              ))}
            </figure>
            <p>
              Bitcast makes screen recording easy. From quick walkthroughs to
              full presentations, it's fast, smooth, and shareable in seconds
            </p>
            <article>
              <Image
                src="/assets/images/jason.png"
                alt="user"
                width={64}
                height={64}
                className="rounded-full"
              />
              <div>
                <h2>James William</h2>
                <p>Product Designer</p>
              </div>
            </article>
          </section>
        </div>
        <p>© Bitcast {new Date().getFullYear()}</p>
      </aside>
      <aside className="google-sign-in">
        <section>
          <Link href="/">
            <Image
              src="/assets/icons/logo.svg"
              alt="logo"
              width={40}
              height={40}
            />
            <h1>Bitcast</h1>
          </Link>
          <p>
            Create and share your very first <span>Bitcast</span> in no time!
          </p>
          <button>
            <Image
              src="/assets/icons/google.svg"
              alt="google"
              width={22}
              height={22}
            />
            <span>Sign in with Google</span>
          </button>
        </section>
      </aside>
      <div className="overlay" />
    </main>
  );
};

export default SignIn;
