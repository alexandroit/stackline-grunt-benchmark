# Upstream review

Source: [grunt-benchmark@1.0.0, 87045a49224f6877c6916357201b80b897221301](https://github.com/shama/grunt-benchmark/commit/87045a49224f6877c6916357201b80b897221301). Existing published runtime files match the integrity-checked upstream npm tarball byte-for-byte. Generated adapter files, where applicable, are built from original sources. License and authorship notices remain unchanged.

## Issue triage (2026-09-29)

- [#13: Deferred done callbacks](https://github.com/shama/grunt-benchmark/issues/13): Preserve benchmark.defer and explicitly exercise asynchronous deferred benchmarks; automatic Promise handling is not added.
- [#11: Enclosed variable reference errors](https://github.com/shama/grunt-benchmark/issues/11): Preserve benchmark function compilation semantics and retain all upstream benchmark examples.

No upstream contact was made and no blanket issue-resolution claim is implied. Node24 is used for development only; published engine declarations remain unchanged.

## Verification

`npm ci --ignore-scripts`, `npm run build --if-present`, `npm test`, `npm run test:package`, `npm audit --audit-level=low`. Exact CI tarballs require successful CI and CodeQL before provenance-enabled publication.
