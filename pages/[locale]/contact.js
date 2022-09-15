import React, { Fragment } from 'react';
import Head from 'next/head';
import brand from '~/public/text/brand';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic';
import ContactFrm from '../../components/Forms/Contact';
import Decoration from '../../components/Forms/Decoration';

function Contact() {
  return (
    <Fragment>
      <Head>
        <title>
          { brand.agency.name }
          &nbsp; - Contact
        </title>
      </Head>
      <div>
        <Decoration />
        <ContactFrm />
      </div>
    </Fragment>
  );
}

export default Contact;

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };
