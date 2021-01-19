/**
 * E' possibile derivare una istanza di `Semigruppo` da una istanza di `Apply`?
 */
import { Semigroup, semigroupString } from 'fp-ts/Semigroup'
import * as O from 'fp-ts/Option'

declare const getSemigroup: <A>(S: Semigroup<A>) => Semigroup<O.Option<A>>

// ------------------------------------
// tests
// ------------------------------------

import * as assert from 'assert'
import { pipe } from 'fp-ts/function'

const S = getSemigroup(semigroupString)

assert.deepStrictEqual(pipe(O.none, S.concat(O.none)), O.none)
assert.deepStrictEqual(pipe(O.some('a'), S.concat(O.none)), O.none)
assert.deepStrictEqual(pipe(O.none, S.concat(O.some('a'))), O.none)
assert.deepStrictEqual(pipe(O.some('a'), S.concat(O.some('b'))), O.some('ab'))
