/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 409:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 888:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 261:
/***/ ((module) => {

module.exports = eval("require")("@xmldom/xmldom");


/***/ }),

/***/ 237:
/***/ ((module) => {

module.exports = eval("require")("xpath");


/***/ }),

/***/ 147:
/***/ ((module) => {

"use strict";
module.exports = __nccwpck_require__(147);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require2_(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require2_);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require2_ !== 'undefined') __nccwpck_require2_.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

const fs = __nccwpck_require2_(147);
const core = __nccwpck_require2_(888);
const xpath = __nccwpck_require2_(237)
const { DOMParser, XMLSerializer } = __nccwpck_require2_(261)

const file = core.getInput('file');
const regex = core.getInput('regex');
const version = core.getInput('version');
const xpath_location = core.getInput('xpath');

/// run
async function run()
{
    try
    {
        const doc = read_csproj(file);
        const verElement = get_csproj_version(doc);
        if (verElement)
        {
            const ver = parse_version(version);
            if (ver)
            {
                verElement.data = version;
                write_csproj(file, doc);
            }
            else
            {
                core.setFailed("failed to parse .csproj version");
            }
        }
        else
        {
            core.setFailed("invalid .csproj does not contain version");
        }

        // read back
        const doc2 = read_csproj(file);
        const verElement2 = get_csproj_version(doc2);
        if (verElement2)
        {
            const ver = parse_version(verElement2.data);
            if (ver)
            {
                core.setOutput('version', verElement2.data);
            }
            else
            {
                core.setFailed("failed to parse .csproj version at read back..");
            }

            if (verElement2.data === verElement.data)
            {
                // no issues
            }
            else
            {
                core.setFailed("readback version different from input version");
            }
        }
        else
        {
            core.setFailed("invalid .csproj does not contain version at read back");
        }
    }
    catch (error)
    {
        core.setFailed(error.message);
    }
}

function parse_version(version)
{
    const match = version.match(regex);
    if (match)
    {
        console.dir({groups: match.groups});
        return [match.groups.major, match.groups.minor, match.groups.patch, match.groups.prerelease, match.groups.buildmetadata];
    }
    return null
}

function get_csproj_version(doc)
{
    const verElement = xpath.select(xpath_location, doc);

    if (verElement === undefined ||
        verElement.length == 0   ||
        verElement[0] === undefined)
    {
        throw Error("Could not locate version element. Check XPath expression or .csproj file");
    }

    if (verElement)
    {
        return verElement[0].firstChild;
    }
    return null;
}

function read_csproj(csprojfile)
{
    const xml = fs.readFileSync(csprojfile, 'utf8');
    console.log("%s", xml);

    const parser = new DOMParser();
    const doc = parser.parseFromString(xml, "application/xml");
    console.dir({doc});

    if (doc == null)
    {
        throw Error("error while parsing");
    }

    return doc;
}

function write_csproj(csprojfile, doc)
{
    const serializer = new XMLSerializer();
    const xml = serializer.serializeToString(doc);
    fs.writeFileSync(csprojfile, xml + '\n');
}

run()

})();

module.exports = __webpack_exports__;
/******/ })()
;

/***/ }),

/***/ 147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __nccwpck_require__(409);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;