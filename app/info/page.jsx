/* eslint-disable */
import Link from 'next/link';

export default function Info() {
  return (
    <div>
      <section className="pane hero">
        <div className="connect-wrapper">
          <div className="connect-cta">
            <div className="pane-wrapper">
              <div className="cta">
                <span className="cta-emoji">🌱</span>seeds.
              </div>
              <div className="feature-image-wrap">
                <a href="#" className="z-inline-block">
                  <img src="/seed0.png" loading="lazy" alt="" className="seeds-exemplar" />
                </a>
                <div className="content-image-button-wrap">
                  <Link href="/" className="content-image-button z-button">🎨 open editor</Link>
                </div>
              </div>
              <div className="docs-button-wrapper">
                <div className="cta-button-wrapper">
                  <a href="#" className="ui-button main z-button">🤲 Get</a>
                  <a href="/" className="ui-button main z-button">🌱 Set</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pane fade-in">
        <div className="pane-wrapper">
          <div className="cta">Interactive. Customizable. Forever.</div>
          <img src="/seeds-collection-tall.jpg" loading="lazy" className="feature-image mobile" />
          <img src="/seeds-collection-wide.jpg" loading="lazy" className="feature-image" />
          <div className="content">
            <h2>A permanent on-chain installation.</h2>
            <p>SEEDS is a collection of 9,999 interpretable, interactive, code-based artworks inscribed on the Bitcoin blockchain.</p>
            <p>Each seed's appearance is determined by its seed number, which is set by its holder, placing the composition of the SEEDS collection in the hands of its collectors.</p>
            <p>Collectors can endlessly re-inscribe on their seeds, allowing them to change its appearance as much as they wish, forever.</p>
            <div className="docs-button-wrapper">
              <div className="cta-button-wrapper">
                <Link href="/collection" className="ui-button main z-button">🔎 see collection</Link>
                <a 
                  href="https://docs.seed.gallery" 
                target="_blank" 
                className="ui-button main z-button">📔 Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pane">
        <div className="pane-wrapper">
          <div className="content">
            <h1 className="heading-3">Seed kinds</h1>
            <p>There are several different kinds of seeds in the collection, each with their own scarcity and unique appeal:</p>
            <h2>🔳 100 <span className="lowercase">x</span> Archetype seeds</h2>
            <p>"Archetype seeds" each have just one single layer.</p>
            <h2>🔲 500 <span className="lowercase">x</span> origin seeds</h2>
            <p>"Origin seeds" were created with locked seed numbers that cannot be changed or duplicated (including the 100 archetype seeds).</p>
            <h2>⬛ 1,000 <span className="lowercase">x</span> dxxmsdxy seeds</h2>
            <p>Seeds which were hand-set and locked by the artist prior to the release of the collection.</p>
            <h2>⬜ 8,500 <span className="lowercase">x</span> blank seeds</h2>
            <p>Blank seeds, ready to be set by their holders. Who sets a seed, or when it is set, may be a source of interest.</p>
            <div className="docs-button-wrapper">
              <div className="cta-button-wrapper">
                <a href="https://docs.seed.gallery/the-details/kinds" target="_blank" className="ui-button main">📔 Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pane">
        <div className="pane-wrapper">
          <div className="pane-wrapper">
            <img src="/set-seed.png" loading="lazy" className="support-image"/>
            <div className="content">
              <h1 id="collection">Seed numbers</h1>
              <p>A seed inscription's seed number is a decimal representation of a binary string that determines which of the seed artwork's hidden layers are visible, and how they are styled.</p>
              <p>There are significantly more valid seed numbers (10^30) than there are stars in the visible universe (10^16), providing collectors with an endless canvas for expression.</p>
              <div className="docs-button-wrapper">
                <a href="https://docs.seed.gallery/the-details/seed-numbers" target="_blank" className="ui-button main">📔 Learn more</a>
              </div>
              <div className="paragraph-insert">
                <p><strong>For builders:</strong> Integrate SEEDS into your project; seed numbers are an elegant, composable primitive for deterministic and pseudo-random generative operations.</p>
                <p><strong>Learn more about the builder bounties </strong><a href="https://discord.gg/UMD27gr5WB" target="_blank"><strong>on Discord</strong></a>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pane">
        <div className="pane-wrapper">
          <div className="content">
            <h1 className="heading-3">Seed Attunement</h1>
            <img src="/seeds-pixels.jpg" loading="lazy" className="feature-image"/>
            <p>Each seed has a default attunement derived from its seed number which determines its colorway.</p>
            <div className="attunements">
              <h4><span className="attunement"> </span> Creation</h4>
              <h4><span className="attunement destruction"> </span> Destruction</h4>
              <h4><span className="attunement perception"> </span> Perception</h4>
              <h4><span className="attunement protection"> </span> Protection</h4>
              <h4><span className="attunement passion"> </span> Passion</h4>
              <h4><span className="attunement fortune"> </span> Fortune</h4>
              <h4><span className="attunement wisdom"> </span> Wisdom</h4>
              <h4><span className="attunement resilience"> </span> Resilience</h4>
              <h4><span className="attunement transformation"> </span> Transformation</h4>
              <h4><span className="attunement eternity"> </span> Eternity</h4>
            </div>
            <p>A seed's attunement dictates its nature, which may have future implications for its holder.</p>
            <p>Holders can override their seed's default attunement, exerting their will over nature, which may also have its own implications.</p>
            <div className="docs-button-wrapper">
              <div className="cta-button-wrapper">
                <a href="https://docs.seed.gallery/the-details/attunement" target="_blank" className="ui-button main">📔 Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pane">
        <div className="pane-wrapper">
          <div className="content">
            <h1 id="garden">The Garden</h1>
            <p>THE GARDEN is a place that doesn't exist; a permanent, ethereal location where all the seeds are planted.</p>
            <p>Seed distribution in the garden is determined by sequential mint order, starting from the center, spiraling upward and outward. Collectors can check their seed's location in the garden via the <Link href="/garden">Garden Map</Link>.</p>
            <img src="/garden-map.png" loading="lazy" className="content-image"/>
            <div className="docs-button-wrapper">
              <Link href="/garden" className="ui-button main z-button">💠 Garden Map</Link>
              <a href="https://docs.seed.gallery/the-garden" target="_blank" className="ui-button main">📔 Learn more</a>
            </div>
            <div className="paragraph-insert">
              <p><strong>For builders:</strong> Check the <a href="https://docs.seed.gallery/the-garden#building-the-garden" target="_blank">docs</a> for details on how to render the garden's spiral and locate garden plots.</p>
            </div>
          </div>    
        </div>
      </section>
      <section className="pane">
        <div className="pane-wrapper">
          <div className="content">
            <h1 id="garden">The medium</h1>
            <p>SEEDS is network art on the Bitcoin blockchain. The artwork employs a custom recursive architecture that loads and modifies the SEEDS source file based on a seed inscription's seed number.</p>
            <p>The source file is a complex SVG with embedded logic and many hidden layers, carefully crafted to produce as many complementary and attractive compositions as possible.</p>
            <p>The source file was inscribed on one of the earliest sats in circulation, which can be traced back through the first Bitcoin transaction from Satoshi Nakamoto to Hal Finney, originating in Block #9 on January 8th, 2009.</p>
            <p>The source file was inscribed on this special satoshi exactly 15 years to the day after it was mined into existence, on the Crystal anniversary of the first crypto network.</p>
            <div className="docs-button-wrapper">
              <a href="https://docs.seed.gallery/the-medium" target="_blank" className="ui-button main">📔 Learn more</a>
            </div>
          </div>
        </div>
      </section>
      <section className="pane">
        <div className="pane-wrapper">
          <div className="content">
            <h1 id="artwork">The Message</h1>
            <p>SEEDS was created by <a href="https://www.twitter.com/dreeemtheartist/?hl=en">dxxmsdxy</a>, a pseudonym of one of the earliest artists in ordinals and crypto. The SEEDS artwork is part of their continuing exploration of 'interpretable art'.</p>
            <div className="w-embed w-script">
              <div className="twitter-tweet twitter-tweet-rendered">
                <iframe id="twitter-widget-0" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" class="" title="X Post" src="https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0IjoiY29uIiwidmVyc2lvbiI6bnVsbH0sInRmd19tZXNzYWdlX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1820975792408637656&amp;lang=en&amp;origin=https%3A%2F%2Fwww.seed.gallery%2F&amp;sessionId=1f4350ad1f94b8133ad3819a0857bd74d479be13&amp;theme=light&amp;widgetsVersion=2615f7e52b7e0%3A1702314776716&amp;width=550px" data-tweet-id="1820975792408637656"></iframe>
              </div>
              <script async="" src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
            <h2 id="statement">Artist's Statement</h2>
            <p className="quote-text">"SEEDS is fundamentally about the future. The seeds we plant today determine the garden that will grow. I want to inspire people to reflect, to express themselves, to start a dialogue with the future, and each other." -dxxmsdxy</p>
            <p>The SEEDS collection marks our transformative place in time, where the old world is giving way to the new. SEEDS plants itself on that border, straddling past and future, insisting that the past is always present, and the future is in our hands.</p>
            <p>Through SEEDS, artist and collector collaborate in the creation and curation of the artwork, forever.</p>
            <p className="quote-text">"This is only the beginning..." -dxxmsdxy</p>
            <div className="docs-button-wrapper">
              <Link href="https://x.com/dxxmsdxy" className="ui-button main">👉 Follow The Artist</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="pane">
        <div className="pane-wrapper">
          <div className="content">
            <h1 id="ownership">Ownership</h1>
            <p>SEEDS holders receive non-exclusive commercial rights to their seed inscription, as well as the PNG&nbsp;and SVG files produced by their seed inscription's "Save" function.</p>
            <p>The SEEDS inscription artwork is released by <a href="https://x.com/dxxmsdxy" target="_blank">dxxmsdxy</a> under the terms of the Non-Exclusive Commercial Rights ("COMMERCIAL") <a href="https://docs.seed.gallery/resources/license" target="_blank">"Can't Be Evil" license</a>. Owners can use, distribute, reproduce, display, remix, modify, and create derivative works, as well as sublicense the artwork. The artist retains exploitation rights.</p>
            <div className="docs-button-wrapper">
              <div className="cta-button-wrapper">
                <a href="#" className="ui-button">🤲 Get seeds</a>
                <a href="https://docs.seed.gallery/resources/license" target="_blank" className="ui-button main">📔 Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pane footer">
        <div className="pane-wrapper">
          <div className="content">
            <div className="docs-button-wrapper hero">
              <h3 id="shortcuts">Still have questions?</h3>
              <div className="cta-button-wrapper">
                <a href="https://docs.seed.gallery" target="_blank" className="ui-button main">📔 read the docs<span className="text-span">via Discord</span></a>
                <a href="https://discord.gg/UMD27gr5WB" target="_blank" className="ui-button main">👥 Join discord<span className="text-span">via Discord</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
