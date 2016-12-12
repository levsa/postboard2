SystemJS.config({
  devConfig: {
    'map': {
      'babel-plugin-transform-decorators-legacy': 'npm:babel-plugin-transform-decorators-legacy@1.3.4',
      'babel-plugin-transform-es2015-typeof-symbol': 'npm:babel-plugin-transform-es2015-typeof-symbol@6.18.0',
      'babel-plugin-transform-flow-strip-types': 'npm:babel-plugin-transform-flow-strip-types@6.18.0',
      'babel-plugin-angular2-annotations': 'npm:babel-plugin-angular2-annotations@5.1.0',
      'babel-plugin-transform-class-properties': 'npm:babel-plugin-transform-class-properties@6.19.0'
    },
    'packages': {
      'npm:babel-plugin-transform-decorators-legacy@1.3.4': {
        'map': {
          'babel-plugin-syntax-decorators': 'npm:babel-plugin-syntax-decorators@6.13.0',
          'babel-runtime': 'npm:babel-runtime@6.20.0',
          'babel-template': 'npm:babel-template@6.16.0'
        }
      },
      'npm:babel-plugin-transform-es2015-typeof-symbol@6.18.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.20.0'
        }
      },
      'npm:babel-plugin-transform-flow-strip-types@6.18.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.20.0',
          'babel-plugin-syntax-flow': 'npm:babel-plugin-syntax-flow@6.18.0'
        }
      },
      'npm:babel-plugin-transform-class-properties@6.19.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.20.0',
          'babel-template': 'npm:babel-template@6.16.0',
          'babel-helper-function-name': 'npm:babel-helper-function-name@6.18.0',
          'babel-plugin-syntax-class-properties': 'npm:babel-plugin-syntax-class-properties@6.13.0'
        }
      },
      'npm:babel-plugin-angular2-annotations@5.1.0': {
        'map': {
          'babel-generator': 'npm:babel-generator@6.20.0'
        }
      },
      'npm:babel-template@6.16.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.20.0',
          'babylon': 'npm:babylon@6.14.1',
          'babel-traverse': 'npm:babel-traverse@6.20.0',
          'lodash': 'npm:lodash@4.17.2',
          'babel-types': 'npm:babel-types@6.20.0'
        }
      },
      'npm:babel-runtime@6.20.0': {
        'map': {
          'core-js': 'npm:core-js@2.4.1',
          'regenerator-runtime': 'npm:regenerator-runtime@0.10.1'
        }
      },
      'npm:babel-helper-function-name@6.18.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.20.0',
          'babel-template': 'npm:babel-template@6.16.0',
          'babel-traverse': 'npm:babel-traverse@6.20.0',
          'babel-types': 'npm:babel-types@6.20.0',
          'babel-helper-get-function-arity': 'npm:babel-helper-get-function-arity@6.18.0'
        }
      },
      'npm:babel-generator@6.20.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.20.0',
          'lodash': 'npm:lodash@4.17.2',
          'babel-types': 'npm:babel-types@6.20.0',
          'babel-messages': 'npm:babel-messages@6.8.0',
          'jsesc': 'npm:jsesc@1.3.0',
          'source-map': 'npm:source-map@0.5.6',
          'detect-indent': 'npm:detect-indent@4.0.0'
        }
      },
      'npm:babel-traverse@6.20.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.20.0',
          'babylon': 'npm:babylon@6.14.1',
          'babel-messages': 'npm:babel-messages@6.8.0',
          'babel-types': 'npm:babel-types@6.20.0',
          'lodash': 'npm:lodash@4.17.2',
          'globals': 'npm:globals@9.14.0',
          'babel-code-frame': 'npm:babel-code-frame@6.20.0',
          'debug': 'npm:debug@2.3.3',
          'invariant': 'npm:invariant@2.2.2'
        }
      },
      'npm:babel-helper-get-function-arity@6.18.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.20.0',
          'babel-types': 'npm:babel-types@6.20.0'
        }
      },
      'npm:babel-types@6.20.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.20.0',
          'lodash': 'npm:lodash@4.17.2',
          'esutils': 'npm:esutils@2.0.2',
          'to-fast-properties': 'npm:to-fast-properties@1.0.2'
        }
      },
      'npm:babel-messages@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.20.0'
        }
      },
      'npm:detect-indent@4.0.0': {
        'map': {
          'repeating': 'npm:repeating@2.0.1'
        }
      },
      'npm:babel-code-frame@6.20.0': {
        'map': {
          'esutils': 'npm:esutils@2.0.2',
          'chalk': 'npm:chalk@1.1.3',
          'js-tokens': 'npm:js-tokens@2.0.0'
        }
      },
      'npm:invariant@2.2.2': {
        'map': {
          'loose-envify': 'npm:loose-envify@1.3.0'
        }
      },
      'npm:debug@2.3.3': {
        'map': {
          'ms': 'npm:ms@0.7.2'
        }
      },
      'npm:loose-envify@1.3.0': {
        'map': {
          'js-tokens': 'npm:js-tokens@2.0.0'
        }
      },
      'npm:repeating@2.0.1': {
        'map': {
          'is-finite': 'npm:is-finite@1.0.2'
        }
      },
      'npm:is-finite@1.0.2': {
        'map': {
          'number-is-nan': 'npm:number-is-nan@1.0.1'
        }
      }
    }
  },
  packages: {
    'src': {
      'defaultExtension': 'ts'
    }
  },
  transpiler: 'ts',
  typescriptOptions: {
    'sourceMap': true,
    'emitDecoratorMetadata': true,
    'experimentalDecorators': true,
    'removeComments': false,
    'noImplicitAny': false
  }
});

SystemJS.config({
  packageConfigPaths: [
    'npm:@*/*.json',
    'npm:*.json',
    'github:*/*.json'
  ],
  map: {
    '@angular/common': 'npm:@angular/common@2.3.0',
    '@angular/compiler': 'npm:@angular/compiler@2.3.0',
    '@angular/core': 'npm:@angular/core@2.3.0',
    '@angular/http': 'npm:@angular/http@2.3.0',
    '@angular/platform-browser': 'npm:@angular/platform-browser@2.3.0',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@2.3.0',
    '@angular/router': 'npm:@angular/router@3.3.0',
    'assert': 'github:jspm/nodelibs-assert@0.2.0-alpha',
    'bcrypt-pbkdf': 'npm:bcrypt-pbkdf@1.0.0',
    'buffer': 'github:jspm/nodelibs-buffer@0.2.0-alpha',
    'canvas': 'npm:canvas@1.6.2',
    'child_process': 'github:jspm/nodelibs-child_process@0.2.0-alpha',
    'constants': 'github:jspm/nodelibs-constants@0.2.0-alpha',
    'core-js': 'npm:core-js@2.4.1',
    'crypto': 'github:jspm/nodelibs-crypto@0.2.0-alpha',
    'dgram': 'github:jspm/nodelibs-dgram@0.2.0-alpha',
    'dns': 'github:jspm/nodelibs-dns@0.2.0-alpha',
    'ecc-jsbn': 'npm:ecc-jsbn@0.1.1',
    'events': 'github:jspm/nodelibs-events@0.2.0-alpha',
    'fabric': 'npm:fabric@1.7.1',
    'fs': 'github:jspm/nodelibs-fs@0.2.0-alpha',
    'http': 'github:jspm/nodelibs-http@0.2.0-alpha',
    'https': 'github:jspm/nodelibs-https@0.2.0-alpha',
    'jodid25519': 'npm:jodid25519@1.0.2',
    'jsbn': 'npm:jsbn@0.1.0',
    'jsdom': 'npm:jsdom@3.1.2',
    'module': 'github:jspm/nodelibs-module@0.2.0-alpha',
    'net': 'github:jspm/nodelibs-net@0.2.0-alpha',
    'os': 'github:jspm/nodelibs-os@0.2.0-alpha',
    'path': 'github:jspm/nodelibs-path@0.2.0-alpha',
    'process': 'github:jspm/nodelibs-process@0.2.0-alpha',
    'querystring': 'github:jspm/nodelibs-querystring@0.2.0-alpha',
    'reflect-metadata': 'npm:reflect-metadata@0.1.8',
    'rxjs': 'npm:rxjs@5.0.0-beta.12',
    'source-map': 'npm:source-map@0.2.0',
    'stream': 'github:jspm/nodelibs-stream@0.2.0-alpha',
    'string_decoder': 'github:jspm/nodelibs-string_decoder@0.2.0-alpha',
    'timers': 'github:jspm/nodelibs-timers@0.2.0-alpha',
    'tls': 'github:jspm/nodelibs-tls@0.2.0-alpha',
    'ts': 'github:frankwallis/plugin-typescript@5.1.2',
    'tty': 'github:jspm/nodelibs-tty@0.2.0-alpha',
    'tweetnacl': 'npm:tweetnacl@0.14.4',
    'url': 'github:jspm/nodelibs-url@0.2.0-alpha',
    'util': 'github:jspm/nodelibs-util@0.2.0-alpha',
    'vm': 'github:jspm/nodelibs-vm@0.2.0-alpha',
    'xmldom': 'npm:xmldom@0.1.27',
    'zlib': 'github:jspm/nodelibs-zlib@0.2.0-alpha',
    'zone.js': 'npm:zone.js@0.6.26'
  },
  packages: {
    'npm:rxjs@5.0.0-beta.12': {
      'map': {
        'symbol-observable': 'npm:symbol-observable@1.0.4'
      }
    },
    'github:frankwallis/plugin-typescript@5.1.2': {
      'map': {
        'typescript': 'npm:typescript@2.1.4'
      }
    },
    'npm:typescript@2.1.4': {
      'map': {
        'source-map-support': 'npm:source-map-support@0.4.6'
      }
    },
    'npm:source-map-support@0.4.6': {
      'map': {
        'source-map': 'npm:source-map@0.5.6'
      }
    },
    'github:jspm/nodelibs-timers@0.2.0-alpha': {
      'map': {
        'timers-browserify': 'npm:timers-browserify@1.4.2'
      }
    },
    'github:jspm/nodelibs-crypto@0.2.0-alpha': {
      'map': {
        'crypto-browserify': 'npm:crypto-browserify@3.11.0'
      }
    },
    'npm:timers-browserify@1.4.2': {
      'map': {
        'process': 'npm:process@0.11.9'
      }
    },
    'npm:crypto-browserify@3.11.0': {
      'map': {
        'browserify-cipher': 'npm:browserify-cipher@1.0.0',
        'browserify-sign': 'npm:browserify-sign@4.0.0',
        'create-hash': 'npm:create-hash@1.1.2',
        'create-ecdh': 'npm:create-ecdh@4.0.0',
        'pbkdf2': 'npm:pbkdf2@3.0.9',
        'inherits': 'npm:inherits@2.0.3',
        'create-hmac': 'npm:create-hmac@1.1.4',
        'randombytes': 'npm:randombytes@2.0.3',
        'public-encrypt': 'npm:public-encrypt@4.0.0',
        'diffie-hellman': 'npm:diffie-hellman@5.0.2'
      }
    },
    'npm:browserify-sign@4.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'create-hmac': 'npm:create-hmac@1.1.4',
        'inherits': 'npm:inherits@2.0.3',
        'bn.js': 'npm:bn.js@4.11.6',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'elliptic': 'npm:elliptic@6.3.2',
        'parse-asn1': 'npm:parse-asn1@5.0.0'
      }
    },
    'npm:create-hash@1.1.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'ripemd160': 'npm:ripemd160@1.0.1',
        'cipher-base': 'npm:cipher-base@1.0.3',
        'sha.js': 'npm:sha.js@2.4.8'
      }
    },
    'npm:pbkdf2@3.0.9': {
      'map': {
        'create-hmac': 'npm:create-hmac@1.1.4'
      }
    },
    'npm:public-encrypt@4.0.0': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.3',
        'create-hash': 'npm:create-hash@1.1.2',
        'bn.js': 'npm:bn.js@4.11.6',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'parse-asn1': 'npm:parse-asn1@5.0.0'
      }
    },
    'npm:create-hmac@1.1.4': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:diffie-hellman@5.0.2': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.3',
        'bn.js': 'npm:bn.js@4.11.6',
        'miller-rabin': 'npm:miller-rabin@4.0.0'
      }
    },
    'npm:browserify-cipher@1.0.0': {
      'map': {
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'browserify-aes': 'npm:browserify-aes@1.0.6',
        'browserify-des': 'npm:browserify-des@1.0.0'
      }
    },
    'npm:create-ecdh@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'elliptic': 'npm:elliptic@6.3.2'
      }
    },
    'npm:evp_bytestokey@1.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2'
      }
    },
    'npm:browserify-des@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'cipher-base': 'npm:cipher-base@1.0.3',
        'des.js': 'npm:des.js@1.0.0'
      }
    },
    'npm:browserify-aes@1.0.6': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'inherits': 'npm:inherits@2.0.3',
        'cipher-base': 'npm:cipher-base@1.0.3',
        'buffer-xor': 'npm:buffer-xor@1.0.3'
      }
    },
    'npm:elliptic@6.3.2': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'inherits': 'npm:inherits@2.0.3',
        'brorand': 'npm:brorand@1.0.6',
        'hash.js': 'npm:hash.js@1.0.3'
      }
    },
    'npm:browserify-rsa@4.0.1': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'randombytes': 'npm:randombytes@2.0.3'
      }
    },
    'npm:parse-asn1@5.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'pbkdf2': 'npm:pbkdf2@3.0.9',
        'browserify-aes': 'npm:browserify-aes@1.0.6',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'asn1.js': 'npm:asn1.js@4.9.0'
      }
    },
    'npm:cipher-base@1.0.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:sha.js@2.4.8': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'github:jspm/nodelibs-buffer@0.2.0-alpha': {
      'map': {
        'buffer-browserify': 'npm:buffer@4.9.1'
      }
    },
    'npm:miller-rabin@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'brorand': 'npm:brorand@1.0.6'
      }
    },
    'npm:des.js@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:hash.js@1.0.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:asn1.js@4.9.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:buffer@4.9.1': {
      'map': {
        'ieee754': 'npm:ieee754@1.1.8',
        'base64-js': 'npm:base64-js@1.2.0',
        'isarray': 'npm:isarray@1.0.0'
      }
    },
    'github:jspm/nodelibs-stream@0.2.0-alpha': {
      'map': {
        'stream-browserify': 'npm:stream-browserify@2.0.1'
      }
    },
    'npm:stream-browserify@2.0.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'readable-stream': 'npm:readable-stream@2.2.2'
      }
    },
    'npm:readable-stream@2.2.2': {
      'map': {
        'isarray': 'npm:isarray@1.0.0',
        'inherits': 'npm:inherits@2.0.3',
        'buffer-shims': 'npm:buffer-shims@1.0.0',
        'core-util-is': 'npm:core-util-is@1.0.2',
        'process-nextick-args': 'npm:process-nextick-args@1.0.7',
        'util-deprecate': 'npm:util-deprecate@1.0.2',
        'string_decoder': 'npm:string_decoder@0.10.31'
      }
    },
    'github:jspm/nodelibs-os@0.2.0-alpha': {
      'map': {
        'os-browserify': 'npm:os-browserify@0.2.1'
      }
    },
    'github:jspm/nodelibs-string_decoder@0.2.0-alpha': {
      'map': {
        'string_decoder-browserify': 'npm:string_decoder@0.10.31'
      }
    },
    'npm:chalk@1.1.3': {
      'map': {
        'ansi-styles': 'npm:ansi-styles@2.2.1',
        'escape-string-regexp': 'npm:escape-string-regexp@1.0.5',
        'strip-ansi': 'npm:strip-ansi@3.0.1',
        'has-ansi': 'npm:has-ansi@2.0.0',
        'supports-color': 'npm:supports-color@2.0.0'
      }
    },
    'npm:strip-ansi@3.0.1': {
      'map': {
        'ansi-regex': 'npm:ansi-regex@2.0.0'
      }
    },
    'npm:has-ansi@2.0.0': {
      'map': {
        'ansi-regex': 'npm:ansi-regex@2.0.0'
      }
    },
    'npm:jsdom@3.1.2': {
      'map': {
        'browser-request': 'npm:browser-request@0.3.3',
        'cssom': 'npm:cssom@0.3.1',
        'cssstyle': 'npm:cssstyle@0.2.37',
        'acorn': 'npm:acorn@0.11.0',
        'nwmatcher': 'npm:nwmatcher@1.3.9',
        'acorn-globals': 'npm:acorn-globals@1.0.9',
        'xmlhttprequest': 'npm:xmlhttprequest@1.8.0',
        'htmlparser2': 'npm:htmlparser2@3.9.2',
        'parse5': 'npm:parse5@1.5.1',
        'xml-name-validator': 'npm:xml-name-validator@1.0.0',
        'request': 'npm:request@2.79.0',
        'node-request': 'npm:request@2.79.0',
        'escodegen': 'npm:escodegen@1.8.1',
        'contextify': 'npm:contextify@0.1.15',
        'node-contextify': 'npm:contextify@0.1.15'
      }
    },
    'npm:canvas@1.6.2': {
      'map': {
        'nan': 'npm:nan@2.4.0'
      }
    },
    'npm:cssstyle@0.2.37': {
      'map': {
        'cssom': 'npm:cssom@0.3.1'
      }
    },
    'npm:acorn-globals@1.0.9': {
      'map': {
        'acorn': 'npm:acorn@2.7.0'
      }
    },
    'npm:contextify@0.1.15': {
      'map': {
        'nan': 'npm:nan@2.4.0',
        'bindings': 'npm:bindings@1.2.1'
      }
    },
    'npm:htmlparser2@3.9.2': {
      'map': {
        'domelementtype': 'npm:domelementtype@1.3.0',
        'domhandler': 'npm:domhandler@2.3.0',
        'domutils': 'npm:domutils@1.5.1',
        'inherits': 'npm:inherits@2.0.3',
        'readable-stream': 'npm:readable-stream@2.2.2',
        'node-readable-stream': 'npm:readable-stream@2.2.2',
        'entities': 'npm:entities@1.1.1'
      }
    },
    'npm:escodegen@1.8.1': {
      'map': {
        'estraverse': 'npm:estraverse@1.9.3',
        'esprima': 'npm:esprima@2.7.3',
        'esutils': 'npm:esutils@2.0.2',
        'optionator': 'npm:optionator@0.8.2'
      }
    },
    'npm:request@2.79.0': {
      'map': {
        'aws-sign2': 'npm:aws-sign2@0.6.0',
        'aws4': 'npm:aws4@1.5.0',
        'caseless': 'npm:caseless@0.11.0',
        'har-validator': 'npm:har-validator@2.0.6',
        'combined-stream': 'npm:combined-stream@1.0.5',
        'json-stringify-safe': 'npm:json-stringify-safe@5.0.1',
        'forever-agent': 'npm:forever-agent@0.6.1',
        'form-data': 'npm:form-data@2.1.2',
        'is-typedarray': 'npm:is-typedarray@1.0.0',
        'extend': 'npm:extend@3.0.0',
        'isstream': 'npm:isstream@0.1.2',
        'mime-types': 'npm:mime-types@2.1.13',
        'http-signature': 'npm:http-signature@1.1.1',
        'uuid': 'npm:uuid@3.0.1',
        'tunnel-agent': 'npm:tunnel-agent@0.4.3',
        'stringstream': 'npm:stringstream@0.0.5',
        'oauth-sign': 'npm:oauth-sign@0.8.2',
        'hawk': 'npm:hawk@3.1.3',
        'tough-cookie': 'npm:tough-cookie@2.3.2',
        'qs': 'npm:qs@6.3.0'
      }
    },
    'npm:domhandler@2.3.0': {
      'map': {
        'domelementtype': 'npm:domelementtype@1.3.0'
      }
    },
    'npm:domutils@1.5.1': {
      'map': {
        'domelementtype': 'npm:domelementtype@1.3.0',
        'dom-serializer': 'npm:dom-serializer@0.1.0'
      }
    },
    'npm:form-data@2.1.2': {
      'map': {
        'combined-stream': 'npm:combined-stream@1.0.5',
        'mime-types': 'npm:mime-types@2.1.13',
        'asynckit': 'npm:asynckit@0.4.0'
      }
    },
    'npm:source-map@0.2.0': {
      'map': {
        'amdefine': 'npm:amdefine@1.0.1'
      }
    },
    'npm:har-validator@2.0.6': {
      'map': {
        'commander': 'npm:commander@2.9.0',
        'is-my-json-valid': 'npm:is-my-json-valid@2.15.0',
        'pinkie-promise': 'npm:pinkie-promise@2.0.1',
        'chalk': 'npm:chalk@1.1.3'
      }
    },
    'npm:combined-stream@1.0.5': {
      'map': {
        'delayed-stream': 'npm:delayed-stream@1.0.0'
      }
    },
    'npm:http-signature@1.1.1': {
      'map': {
        'assert-plus': 'npm:assert-plus@0.2.0',
        'jsprim': 'npm:jsprim@1.3.1',
        'sshpk': 'npm:sshpk@1.10.1'
      }
    },
    'npm:tough-cookie@2.3.2': {
      'map': {
        'punycode': 'npm:punycode@1.4.1'
      }
    },
    'npm:hawk@3.1.3': {
      'map': {
        'cryptiles': 'npm:cryptiles@2.0.5',
        'hoek': 'npm:hoek@2.16.3',
        'sntp': 'npm:sntp@1.0.9',
        'boom': 'npm:boom@2.10.1'
      }
    },
    'npm:optionator@0.8.2': {
      'map': {
        'wordwrap': 'npm:wordwrap@1.0.0',
        'prelude-ls': 'npm:prelude-ls@1.1.2',
        'levn': 'npm:levn@0.3.0',
        'deep-is': 'npm:deep-is@0.1.3',
        'type-check': 'npm:type-check@0.3.2',
        'fast-levenshtein': 'npm:fast-levenshtein@2.0.5'
      }
    },
    'npm:mime-types@2.1.13': {
      'map': {
        'mime-db': 'npm:mime-db@1.25.0'
      }
    },
    'npm:dom-serializer@0.1.0': {
      'map': {
        'domelementtype': 'npm:domelementtype@1.1.3',
        'entities': 'npm:entities@1.1.1'
      }
    },
    'npm:sshpk@1.10.1': {
      'map': {
        'assert-plus': 'npm:assert-plus@1.0.0',
        'getpass': 'npm:getpass@0.1.6',
        'asn1': 'npm:asn1@0.2.3',
        'dashdash': 'npm:dashdash@1.14.1'
      }
    },
    'npm:cryptiles@2.0.5': {
      'map': {
        'boom': 'npm:boom@2.10.1'
      }
    },
    'npm:sntp@1.0.9': {
      'map': {
        'hoek': 'npm:hoek@2.16.3'
      }
    },
    'npm:levn@0.3.0': {
      'map': {
        'prelude-ls': 'npm:prelude-ls@1.1.2',
        'type-check': 'npm:type-check@0.3.2'
      }
    },
    'npm:type-check@0.3.2': {
      'map': {
        'prelude-ls': 'npm:prelude-ls@1.1.2'
      }
    },
    'npm:boom@2.10.1': {
      'map': {
        'hoek': 'npm:hoek@2.16.3'
      }
    },
    'npm:commander@2.9.0': {
      'map': {
        'graceful-readlink': 'npm:graceful-readlink@1.0.1'
      }
    },
    'npm:is-my-json-valid@2.15.0': {
      'map': {
        'generate-function': 'npm:generate-function@2.0.0',
        'jsonpointer': 'npm:jsonpointer@4.0.0',
        'xtend': 'npm:xtend@4.0.1',
        'generate-object-property': 'npm:generate-object-property@1.2.0'
      }
    },
    'npm:ecc-jsbn@0.1.1': {
      'map': {
        'jsbn': 'npm:jsbn@0.1.0'
      }
    },
    'npm:bcrypt-pbkdf@1.0.0': {
      'map': {
        'tweetnacl': 'npm:tweetnacl@0.14.4'
      }
    },
    'npm:getpass@0.1.6': {
      'map': {
        'assert-plus': 'npm:assert-plus@1.0.0'
      }
    },
    'npm:jsprim@1.3.1': {
      'map': {
        'json-schema': 'npm:json-schema@0.2.3',
        'extsprintf': 'npm:extsprintf@1.0.2',
        'verror': 'npm:verror@1.3.6'
      }
    },
    'npm:jodid25519@1.0.2': {
      'map': {
        'jsbn': 'npm:jsbn@0.1.0'
      }
    },
    'npm:pinkie-promise@2.0.1': {
      'map': {
        'pinkie': 'npm:pinkie@2.0.4'
      }
    },
    'npm:verror@1.3.6': {
      'map': {
        'extsprintf': 'npm:extsprintf@1.0.2'
      }
    },
    'npm:dashdash@1.14.1': {
      'map': {
        'assert-plus': 'npm:assert-plus@1.0.0'
      }
    },
    'npm:generate-object-property@1.2.0': {
      'map': {
        'is-property': 'npm:is-property@1.0.2'
      }
    },
    'github:jspm/nodelibs-http@0.2.0-alpha': {
      'map': {
        'http-browserify': 'npm:stream-http@2.5.0'
      }
    },
    'npm:stream-http@2.5.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'readable-stream': 'npm:readable-stream@2.2.2',
        'xtend': 'npm:xtend@4.0.1',
        'builtin-status-codes': 'npm:builtin-status-codes@2.0.0',
        'to-arraybuffer': 'npm:to-arraybuffer@1.0.1'
      }
    },
    'github:jspm/nodelibs-url@0.2.0-alpha': {
      'map': {
        'url-browserify': 'npm:url@0.11.0'
      }
    },
    'npm:url@0.11.0': {
      'map': {
        'punycode': 'npm:punycode@1.3.2',
        'querystring': 'npm:querystring@0.2.0'
      }
    },
    'github:jspm/nodelibs-zlib@0.2.0-alpha': {
      'map': {
        'zlib-browserify': 'npm:browserify-zlib@0.1.4'
      }
    },
    'npm:browserify-zlib@0.1.4': {
      'map': {
        'readable-stream': 'npm:readable-stream@2.2.2',
        'pako': 'npm:pako@0.2.9'
      }
    }
  }
});
