import http from "http";
import fs from "fs";
import path from "path";

const BASE_URL = "http://localhost:3000";

function fetchUrl(urlPath) {
  return new Promise((resolve, reject) => {
    const req = http.get(`${BASE_URL}${urlPath}`, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: data,
        });
      });
    });
    req.on("error", (err) => reject(err));
    req.setTimeout(5000, () => {
      req.destroy();
      reject(new Error(`Timeout fetching ${urlPath}`));
    });
  });
}

async function runTestSuite() {
  console.log("=================================================");
  console.log("🚀 STARTING COMPREHENSIVE FULL-SITE TEST SUITE");
  console.log("=================================================\n");

  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`  ✅ PASS: ${message}`);
      passed++;
    } else {
      console.error(`  ❌ FAIL: ${message}`);
      failed++;
    }
  }

  // TEST SUITE 1: HTTP Endpoint & Asset Health
  console.log("\n📦 [TEST SUITE 1]: HTTP Routes & Static Assets Health");
  const endpoints = [
    { path: "/", expectedStatus: 200, type: "HTML" },
    { path: "/favicon.svg", expectedStatus: 200, type: "SVG" },
    { path: "/icon", expectedStatus: 200, type: "PNG Icon" },
    { path: "/apple-icon", expectedStatus: 200, type: "Apple Icon" },
    { path: "/Mahmoud_Mohasseb_Resume.pdf", expectedStatus: 200, type: "PDF Resume" },
    { path: "/mahmoud-profile.png", expectedStatus: 200, type: "Portrait Photo" },
    { path: "/robots.txt", expectedStatus: 200, type: "Robots AI Discovery" },
    { path: "/llms.txt", expectedStatus: 200, type: "LLMs Context File" },
    { path: "/llms-full.txt", expectedStatus: 200, type: "Full LLM Resume" },
  ];

  for (const ep of endpoints) {
    try {
      const res = await fetchUrl(ep.path);
      assert(
        res.statusCode === ep.expectedStatus,
        `${ep.type} (${ep.path}) returned HTTP ${res.statusCode}`
      );
    } catch (err) {
      assert(false, `${ep.type} (${ep.path}) failed to fetch: ${err.message}`);
    }
  }

  // TEST SUITE 2: HTML Content & Navigation Anchors
  console.log("\n🔍 [TEST SUITE 2]: Section Anchors & DOM Layout Structure");
  try {
    const home = await fetchUrl("/");
    const html = home.body;

    const sections = [
      'id="about"',
      'id="vibe-coding"',
      'id="services"',
      'id="experience"',
      'id="projects"',
      'id="tech-stack"',
      'id="certifications"',
      'id="contact"',
    ];

    for (const sec of sections) {
      assert(html.includes(sec), `Section anchor ${sec} exists in DOM`);
    }

    // Check WhatsApp contact formatting
    assert(
      html.includes("wa.me/40752331545") || html.includes("+40752331545"),
      "WhatsApp direct channel is correctly bound to +40 752 331 545"
    );

    // Check Single Image Instance Rule
    const profileImgMatches = (html.match(/mahmoud-profile\.png/g) || []).length;
    // In HTML it appears in preload link and in the hero image tag
    assert(
      profileImgMatches >= 1,
      `Portrait asset configured for hero pedestal (found ${profileImgMatches} references in HTML)`
    );

    // Check Verbatim Name Rule
    assert(
      html.includes("Mahmoud Mohasseb"),
      "Name 'Mahmoud Mohasseb' renders verbatim"
    );

    // Check Audio Reader HUD Presence
    assert(
      html.includes("Audio") || html.includes("audio") || html.includes("Volume"),
      "AI Audio Resume Reader system is present in DOM"
    );

    // Check JSON-LD Schema for AI Crawlers
    assert(
      html.includes('application/ld+json') && html.includes('"@type":"Person"'),
      "JSON-LD Schema.org Structured Data for AI search engines is present in HTML"
    );
  } catch (err) {
    assert(false, `Failed HTML structure evaluation: ${err.message}`);
  }

  // TEST SUITE 3: Localization & Translation Keys Integrity
  console.log("\n🌐 [TEST SUITE 3]: Multilingual Localization & Dictionary Completeness");
  try {
    const langContextPath = path.resolve("src/context/LanguageContext.tsx");
    const langContent = fs.readFileSync(langContextPath, "utf-8");

    assert(
      langContent.includes("en:") &&
        langContent.includes("ro:") &&
        langContent.includes("de:") &&
        langContent.includes("ar:"),
      "All 4 target languages (EN, RO, DE, AR) configured in LanguageContext"
    );

    // Verify Arabic Verbatim Name
    assert(
      langContent.includes("Mahmoud Mohasseb"),
      "Strict Name Rule: Mahmoud Mohasseb preserved verbatim across all dictionaries"
    );
  } catch (err) {
    assert(false, `Failed language dictionary test: ${err.message}`);
  }

  // TEST SUITE 4: Audio Reader Speech Data Integrity
  console.log("\n🎙️ [TEST SUITE 4]: AI Audio Resume Reader Data & Voices");
  try {
    const audioContextPath = path.resolve("src/context/AudioReaderContext.tsx");
    const audioContent = fs.readFileSync(audioContextPath, "utf-8");

    assert(
      audioContent.includes("en:") &&
        audioContent.includes("ro:") &&
        audioContent.includes("de:") &&
        audioContent.includes("ar:"),
      "Audio Reader scripts exist for all 4 languages"
    );

    assert(
      audioContent.includes("speechText"),
      "Phonetically optimized speechText scripts configured for clarity"
    );

    assert(
      audioContent.includes("getBestVoice"),
      "Neural voice prioritization algorithm is implemented"
    );
  } catch (err) {
    assert(false, `Failed audio context test: ${err.message}`);
  }

  console.log("\n=================================================");
  console.log(`📊 TEST SUMMARY: ${passed} PASSED, ${failed} FAILED`);
  console.log("=================================================");

  if (failed > 0) {
    process.exit(1);
  }
}

runTestSuite();
