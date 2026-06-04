/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Workflow from './components/Workflow';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-indigo-500/30">
      <Hero />
      <About />
      <Projects />
      <Workflow />
      <Footer />
    </div>
  );
}
