
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model authors
 * 
 */
export type authors = $Result.DefaultSelection<Prisma.$authorsPayload>
/**
 * Model authors_recipes
 * 
 */
export type authors_recipes = $Result.DefaultSelection<Prisma.$authors_recipesPayload>
/**
 * Model categories
 * 
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>
/**
 * Model categories_recipes
 * 
 */
export type categories_recipes = $Result.DefaultSelection<Prisma.$categories_recipesPayload>
/**
 * Model ingredients
 * 
 */
export type ingredients = $Result.DefaultSelection<Prisma.$ingredientsPayload>
/**
 * Model ingredients_recipes
 * 
 */
export type ingredients_recipes = $Result.DefaultSelection<Prisma.$ingredients_recipesPayload>
/**
 * Model not_recipes
 * 
 */
export type not_recipes = $Result.DefaultSelection<Prisma.$not_recipesPayload>
/**
 * Model recipes
 * 
 */
export type recipes = $Result.DefaultSelection<Prisma.$recipesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Authors
 * const authors = await prisma.authors.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Authors
   * const authors = await prisma.authors.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.authors`: Exposes CRUD operations for the **authors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authors
    * const authors = await prisma.authors.findMany()
    * ```
    */
  get authors(): Prisma.authorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authors_recipes`: Exposes CRUD operations for the **authors_recipes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authors_recipes
    * const authors_recipes = await prisma.authors_recipes.findMany()
    * ```
    */
  get authors_recipes(): Prisma.authors_recipesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories_recipes`: Exposes CRUD operations for the **categories_recipes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories_recipes
    * const categories_recipes = await prisma.categories_recipes.findMany()
    * ```
    */
  get categories_recipes(): Prisma.categories_recipesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingredients`: Exposes CRUD operations for the **ingredients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingredients
    * const ingredients = await prisma.ingredients.findMany()
    * ```
    */
  get ingredients(): Prisma.ingredientsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingredients_recipes`: Exposes CRUD operations for the **ingredients_recipes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingredients_recipes
    * const ingredients_recipes = await prisma.ingredients_recipes.findMany()
    * ```
    */
  get ingredients_recipes(): Prisma.ingredients_recipesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.not_recipes`: Exposes CRUD operations for the **not_recipes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Not_recipes
    * const not_recipes = await prisma.not_recipes.findMany()
    * ```
    */
  get not_recipes(): Prisma.not_recipesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipes`: Exposes CRUD operations for the **recipes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipes
    * const recipes = await prisma.recipes.findMany()
    * ```
    */
  get recipes(): Prisma.recipesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    authors: 'authors',
    authors_recipes: 'authors_recipes',
    categories: 'categories',
    categories_recipes: 'categories_recipes',
    ingredients: 'ingredients',
    ingredients_recipes: 'ingredients_recipes',
    not_recipes: 'not_recipes',
    recipes: 'recipes'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "authors" | "authors_recipes" | "categories" | "categories_recipes" | "ingredients" | "ingredients_recipes" | "not_recipes" | "recipes"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      authors: {
        payload: Prisma.$authorsPayload<ExtArgs>
        fields: Prisma.authorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.authorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.authorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorsPayload>
          }
          findFirst: {
            args: Prisma.authorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.authorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorsPayload>
          }
          findMany: {
            args: Prisma.authorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorsPayload>[]
          }
          create: {
            args: Prisma.authorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorsPayload>
          }
          createMany: {
            args: Prisma.authorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.authorsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorsPayload>[]
          }
          delete: {
            args: Prisma.authorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorsPayload>
          }
          update: {
            args: Prisma.authorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorsPayload>
          }
          deleteMany: {
            args: Prisma.authorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.authorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.authorsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorsPayload>[]
          }
          upsert: {
            args: Prisma.authorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorsPayload>
          }
          aggregate: {
            args: Prisma.AuthorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthors>
          }
          groupBy: {
            args: Prisma.authorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.authorsCountArgs<ExtArgs>
            result: $Utils.Optional<AuthorsCountAggregateOutputType> | number
          }
        }
      }
      authors_recipes: {
        payload: Prisma.$authors_recipesPayload<ExtArgs>
        fields: Prisma.authors_recipesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.authors_recipesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authors_recipesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.authors_recipesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authors_recipesPayload>
          }
          findFirst: {
            args: Prisma.authors_recipesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authors_recipesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.authors_recipesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authors_recipesPayload>
          }
          findMany: {
            args: Prisma.authors_recipesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authors_recipesPayload>[]
          }
          create: {
            args: Prisma.authors_recipesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authors_recipesPayload>
          }
          createMany: {
            args: Prisma.authors_recipesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.authors_recipesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authors_recipesPayload>[]
          }
          delete: {
            args: Prisma.authors_recipesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authors_recipesPayload>
          }
          update: {
            args: Prisma.authors_recipesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authors_recipesPayload>
          }
          deleteMany: {
            args: Prisma.authors_recipesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.authors_recipesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.authors_recipesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authors_recipesPayload>[]
          }
          upsert: {
            args: Prisma.authors_recipesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authors_recipesPayload>
          }
          aggregate: {
            args: Prisma.Authors_recipesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthors_recipes>
          }
          groupBy: {
            args: Prisma.authors_recipesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Authors_recipesGroupByOutputType>[]
          }
          count: {
            args: Prisma.authors_recipesCountArgs<ExtArgs>
            result: $Utils.Optional<Authors_recipesCountAggregateOutputType> | number
          }
        }
      }
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>
        fields: Prisma.categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      categories_recipes: {
        payload: Prisma.$categories_recipesPayload<ExtArgs>
        fields: Prisma.categories_recipesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categories_recipesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categories_recipesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categories_recipesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categories_recipesPayload>
          }
          findFirst: {
            args: Prisma.categories_recipesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categories_recipesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categories_recipesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categories_recipesPayload>
          }
          findMany: {
            args: Prisma.categories_recipesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categories_recipesPayload>[]
          }
          create: {
            args: Prisma.categories_recipesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categories_recipesPayload>
          }
          createMany: {
            args: Prisma.categories_recipesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categories_recipesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categories_recipesPayload>[]
          }
          delete: {
            args: Prisma.categories_recipesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categories_recipesPayload>
          }
          update: {
            args: Prisma.categories_recipesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categories_recipesPayload>
          }
          deleteMany: {
            args: Prisma.categories_recipesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categories_recipesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categories_recipesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categories_recipesPayload>[]
          }
          upsert: {
            args: Prisma.categories_recipesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categories_recipesPayload>
          }
          aggregate: {
            args: Prisma.Categories_recipesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories_recipes>
          }
          groupBy: {
            args: Prisma.categories_recipesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Categories_recipesGroupByOutputType>[]
          }
          count: {
            args: Prisma.categories_recipesCountArgs<ExtArgs>
            result: $Utils.Optional<Categories_recipesCountAggregateOutputType> | number
          }
        }
      }
      ingredients: {
        payload: Prisma.$ingredientsPayload<ExtArgs>
        fields: Prisma.ingredientsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ingredientsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ingredientsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientsPayload>
          }
          findFirst: {
            args: Prisma.ingredientsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ingredientsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientsPayload>
          }
          findMany: {
            args: Prisma.ingredientsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientsPayload>[]
          }
          create: {
            args: Prisma.ingredientsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientsPayload>
          }
          createMany: {
            args: Prisma.ingredientsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ingredientsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientsPayload>[]
          }
          delete: {
            args: Prisma.ingredientsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientsPayload>
          }
          update: {
            args: Prisma.ingredientsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientsPayload>
          }
          deleteMany: {
            args: Prisma.ingredientsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ingredientsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ingredientsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientsPayload>[]
          }
          upsert: {
            args: Prisma.ingredientsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientsPayload>
          }
          aggregate: {
            args: Prisma.IngredientsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngredients>
          }
          groupBy: {
            args: Prisma.ingredientsGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngredientsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ingredientsCountArgs<ExtArgs>
            result: $Utils.Optional<IngredientsCountAggregateOutputType> | number
          }
        }
      }
      ingredients_recipes: {
        payload: Prisma.$ingredients_recipesPayload<ExtArgs>
        fields: Prisma.ingredients_recipesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ingredients_recipesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredients_recipesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ingredients_recipesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredients_recipesPayload>
          }
          findFirst: {
            args: Prisma.ingredients_recipesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredients_recipesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ingredients_recipesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredients_recipesPayload>
          }
          findMany: {
            args: Prisma.ingredients_recipesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredients_recipesPayload>[]
          }
          create: {
            args: Prisma.ingredients_recipesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredients_recipesPayload>
          }
          createMany: {
            args: Prisma.ingredients_recipesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ingredients_recipesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredients_recipesPayload>[]
          }
          delete: {
            args: Prisma.ingredients_recipesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredients_recipesPayload>
          }
          update: {
            args: Prisma.ingredients_recipesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredients_recipesPayload>
          }
          deleteMany: {
            args: Prisma.ingredients_recipesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ingredients_recipesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ingredients_recipesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredients_recipesPayload>[]
          }
          upsert: {
            args: Prisma.ingredients_recipesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredients_recipesPayload>
          }
          aggregate: {
            args: Prisma.Ingredients_recipesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngredients_recipes>
          }
          groupBy: {
            args: Prisma.ingredients_recipesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ingredients_recipesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ingredients_recipesCountArgs<ExtArgs>
            result: $Utils.Optional<Ingredients_recipesCountAggregateOutputType> | number
          }
        }
      }
      not_recipes: {
        payload: Prisma.$not_recipesPayload<ExtArgs>
        fields: Prisma.not_recipesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.not_recipesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$not_recipesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.not_recipesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$not_recipesPayload>
          }
          findFirst: {
            args: Prisma.not_recipesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$not_recipesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.not_recipesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$not_recipesPayload>
          }
          findMany: {
            args: Prisma.not_recipesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$not_recipesPayload>[]
          }
          create: {
            args: Prisma.not_recipesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$not_recipesPayload>
          }
          createMany: {
            args: Prisma.not_recipesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.not_recipesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$not_recipesPayload>[]
          }
          delete: {
            args: Prisma.not_recipesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$not_recipesPayload>
          }
          update: {
            args: Prisma.not_recipesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$not_recipesPayload>
          }
          deleteMany: {
            args: Prisma.not_recipesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.not_recipesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.not_recipesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$not_recipesPayload>[]
          }
          upsert: {
            args: Prisma.not_recipesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$not_recipesPayload>
          }
          aggregate: {
            args: Prisma.Not_recipesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNot_recipes>
          }
          groupBy: {
            args: Prisma.not_recipesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Not_recipesGroupByOutputType>[]
          }
          count: {
            args: Prisma.not_recipesCountArgs<ExtArgs>
            result: $Utils.Optional<Not_recipesCountAggregateOutputType> | number
          }
        }
      }
      recipes: {
        payload: Prisma.$recipesPayload<ExtArgs>
        fields: Prisma.recipesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.recipesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.recipesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipesPayload>
          }
          findFirst: {
            args: Prisma.recipesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.recipesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipesPayload>
          }
          findMany: {
            args: Prisma.recipesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipesPayload>[]
          }
          create: {
            args: Prisma.recipesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipesPayload>
          }
          createMany: {
            args: Prisma.recipesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.recipesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipesPayload>[]
          }
          delete: {
            args: Prisma.recipesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipesPayload>
          }
          update: {
            args: Prisma.recipesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipesPayload>
          }
          deleteMany: {
            args: Prisma.recipesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.recipesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.recipesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipesPayload>[]
          }
          upsert: {
            args: Prisma.recipesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipesPayload>
          }
          aggregate: {
            args: Prisma.RecipesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipes>
          }
          groupBy: {
            args: Prisma.recipesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipesGroupByOutputType>[]
          }
          count: {
            args: Prisma.recipesCountArgs<ExtArgs>
            result: $Utils.Optional<RecipesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    authors?: authorsOmit
    authors_recipes?: authors_recipesOmit
    categories?: categoriesOmit
    categories_recipes?: categories_recipesOmit
    ingredients?: ingredientsOmit
    ingredients_recipes?: ingredients_recipesOmit
    not_recipes?: not_recipesOmit
    recipes?: recipesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AuthorsCountOutputType
   */

  export type AuthorsCountOutputType = {
    authors_recipes: number
  }

  export type AuthorsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authors_recipes?: boolean | AuthorsCountOutputTypeCountAuthors_recipesArgs
  }

  // Custom InputTypes
  /**
   * AuthorsCountOutputType without action
   */
  export type AuthorsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorsCountOutputType
     */
    select?: AuthorsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuthorsCountOutputType without action
   */
  export type AuthorsCountOutputTypeCountAuthors_recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: authors_recipesWhereInput
  }


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    categories_recipes: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories_recipes?: boolean | CategoriesCountOutputTypeCountCategories_recipesArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountCategories_recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categories_recipesWhereInput
  }


  /**
   * Count Type IngredientsCountOutputType
   */

  export type IngredientsCountOutputType = {
    ingredients_recipes: number
  }

  export type IngredientsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients_recipes?: boolean | IngredientsCountOutputTypeCountIngredients_recipesArgs
  }

  // Custom InputTypes
  /**
   * IngredientsCountOutputType without action
   */
  export type IngredientsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientsCountOutputType
     */
    select?: IngredientsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IngredientsCountOutputType without action
   */
  export type IngredientsCountOutputTypeCountIngredients_recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ingredients_recipesWhereInput
  }


  /**
   * Count Type RecipesCountOutputType
   */

  export type RecipesCountOutputType = {
    authors_recipes: number
    categories_recipes: number
    ingredients_recipes: number
  }

  export type RecipesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authors_recipes?: boolean | RecipesCountOutputTypeCountAuthors_recipesArgs
    categories_recipes?: boolean | RecipesCountOutputTypeCountCategories_recipesArgs
    ingredients_recipes?: boolean | RecipesCountOutputTypeCountIngredients_recipesArgs
  }

  // Custom InputTypes
  /**
   * RecipesCountOutputType without action
   */
  export type RecipesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipesCountOutputType
     */
    select?: RecipesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecipesCountOutputType without action
   */
  export type RecipesCountOutputTypeCountAuthors_recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: authors_recipesWhereInput
  }

  /**
   * RecipesCountOutputType without action
   */
  export type RecipesCountOutputTypeCountCategories_recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categories_recipesWhereInput
  }

  /**
   * RecipesCountOutputType without action
   */
  export type RecipesCountOutputTypeCountIngredients_recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ingredients_recipesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model authors
   */

  export type AggregateAuthors = {
    _count: AuthorsCountAggregateOutputType | null
    _avg: AuthorsAvgAggregateOutputType | null
    _sum: AuthorsSumAggregateOutputType | null
    _min: AuthorsMinAggregateOutputType | null
    _max: AuthorsMaxAggregateOutputType | null
  }

  export type AuthorsAvgAggregateOutputType = {
    id: number | null
  }

  export type AuthorsSumAggregateOutputType = {
    id: number | null
  }

  export type AuthorsMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type AuthorsMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type AuthorsCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type AuthorsAvgAggregateInputType = {
    id?: true
  }

  export type AuthorsSumAggregateInputType = {
    id?: true
  }

  export type AuthorsMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type AuthorsMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type AuthorsCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type AuthorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authors to aggregate.
     */
    where?: authorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors to fetch.
     */
    orderBy?: authorsOrderByWithRelationInput | authorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: authorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned authors
    **/
    _count?: true | AuthorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthorsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthorsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorsMaxAggregateInputType
  }

  export type GetAuthorsAggregateType<T extends AuthorsAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthors[P]>
      : GetScalarType<T[P], AggregateAuthors[P]>
  }




  export type authorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: authorsWhereInput
    orderBy?: authorsOrderByWithAggregationInput | authorsOrderByWithAggregationInput[]
    by: AuthorsScalarFieldEnum[] | AuthorsScalarFieldEnum
    having?: authorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorsCountAggregateInputType | true
    _avg?: AuthorsAvgAggregateInputType
    _sum?: AuthorsSumAggregateInputType
    _min?: AuthorsMinAggregateInputType
    _max?: AuthorsMaxAggregateInputType
  }

  export type AuthorsGroupByOutputType = {
    id: number
    name: string
    _count: AuthorsCountAggregateOutputType | null
    _avg: AuthorsAvgAggregateOutputType | null
    _sum: AuthorsSumAggregateOutputType | null
    _min: AuthorsMinAggregateOutputType | null
    _max: AuthorsMaxAggregateOutputType | null
  }

  type GetAuthorsGroupByPayload<T extends authorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorsGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorsGroupByOutputType[P]>
        }
      >
    >


  export type authorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    authors_recipes?: boolean | authors$authors_recipesArgs<ExtArgs>
    _count?: boolean | AuthorsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authors"]>

  export type authorsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["authors"]>

  export type authorsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["authors"]>

  export type authorsSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type authorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["authors"]>
  export type authorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authors_recipes?: boolean | authors$authors_recipesArgs<ExtArgs>
    _count?: boolean | AuthorsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type authorsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type authorsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $authorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "authors"
    objects: {
      authors_recipes: Prisma.$authors_recipesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["authors"]>
    composites: {}
  }

  type authorsGetPayload<S extends boolean | null | undefined | authorsDefaultArgs> = $Result.GetResult<Prisma.$authorsPayload, S>

  type authorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<authorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthorsCountAggregateInputType | true
    }

  export interface authorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['authors'], meta: { name: 'authors' } }
    /**
     * Find zero or one Authors that matches the filter.
     * @param {authorsFindUniqueArgs} args - Arguments to find a Authors
     * @example
     * // Get one Authors
     * const authors = await prisma.authors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends authorsFindUniqueArgs>(args: SelectSubset<T, authorsFindUniqueArgs<ExtArgs>>): Prisma__authorsClient<$Result.GetResult<Prisma.$authorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Authors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {authorsFindUniqueOrThrowArgs} args - Arguments to find a Authors
     * @example
     * // Get one Authors
     * const authors = await prisma.authors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends authorsFindUniqueOrThrowArgs>(args: SelectSubset<T, authorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__authorsClient<$Result.GetResult<Prisma.$authorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorsFindFirstArgs} args - Arguments to find a Authors
     * @example
     * // Get one Authors
     * const authors = await prisma.authors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends authorsFindFirstArgs>(args?: SelectSubset<T, authorsFindFirstArgs<ExtArgs>>): Prisma__authorsClient<$Result.GetResult<Prisma.$authorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorsFindFirstOrThrowArgs} args - Arguments to find a Authors
     * @example
     * // Get one Authors
     * const authors = await prisma.authors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends authorsFindFirstOrThrowArgs>(args?: SelectSubset<T, authorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__authorsClient<$Result.GetResult<Prisma.$authorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authors
     * const authors = await prisma.authors.findMany()
     * 
     * // Get first 10 Authors
     * const authors = await prisma.authors.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authorsWithIdOnly = await prisma.authors.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends authorsFindManyArgs>(args?: SelectSubset<T, authorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Authors.
     * @param {authorsCreateArgs} args - Arguments to create a Authors.
     * @example
     * // Create one Authors
     * const Authors = await prisma.authors.create({
     *   data: {
     *     // ... data to create a Authors
     *   }
     * })
     * 
     */
    create<T extends authorsCreateArgs>(args: SelectSubset<T, authorsCreateArgs<ExtArgs>>): Prisma__authorsClient<$Result.GetResult<Prisma.$authorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Authors.
     * @param {authorsCreateManyArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const authors = await prisma.authors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends authorsCreateManyArgs>(args?: SelectSubset<T, authorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Authors and returns the data saved in the database.
     * @param {authorsCreateManyAndReturnArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const authors = await prisma.authors.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Authors and only return the `id`
     * const authorsWithIdOnly = await prisma.authors.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends authorsCreateManyAndReturnArgs>(args?: SelectSubset<T, authorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authorsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Authors.
     * @param {authorsDeleteArgs} args - Arguments to delete one Authors.
     * @example
     * // Delete one Authors
     * const Authors = await prisma.authors.delete({
     *   where: {
     *     // ... filter to delete one Authors
     *   }
     * })
     * 
     */
    delete<T extends authorsDeleteArgs>(args: SelectSubset<T, authorsDeleteArgs<ExtArgs>>): Prisma__authorsClient<$Result.GetResult<Prisma.$authorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Authors.
     * @param {authorsUpdateArgs} args - Arguments to update one Authors.
     * @example
     * // Update one Authors
     * const authors = await prisma.authors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends authorsUpdateArgs>(args: SelectSubset<T, authorsUpdateArgs<ExtArgs>>): Prisma__authorsClient<$Result.GetResult<Prisma.$authorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Authors.
     * @param {authorsDeleteManyArgs} args - Arguments to filter Authors to delete.
     * @example
     * // Delete a few Authors
     * const { count } = await prisma.authors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends authorsDeleteManyArgs>(args?: SelectSubset<T, authorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authors
     * const authors = await prisma.authors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends authorsUpdateManyArgs>(args: SelectSubset<T, authorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors and returns the data updated in the database.
     * @param {authorsUpdateManyAndReturnArgs} args - Arguments to update many Authors.
     * @example
     * // Update many Authors
     * const authors = await prisma.authors.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Authors and only return the `id`
     * const authorsWithIdOnly = await prisma.authors.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends authorsUpdateManyAndReturnArgs>(args: SelectSubset<T, authorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authorsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Authors.
     * @param {authorsUpsertArgs} args - Arguments to update or create a Authors.
     * @example
     * // Update or create a Authors
     * const authors = await prisma.authors.upsert({
     *   create: {
     *     // ... data to create a Authors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Authors we want to update
     *   }
     * })
     */
    upsert<T extends authorsUpsertArgs>(args: SelectSubset<T, authorsUpsertArgs<ExtArgs>>): Prisma__authorsClient<$Result.GetResult<Prisma.$authorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorsCountArgs} args - Arguments to filter Authors to count.
     * @example
     * // Count the number of Authors
     * const count = await prisma.authors.count({
     *   where: {
     *     // ... the filter for the Authors we want to count
     *   }
     * })
    **/
    count<T extends authorsCountArgs>(
      args?: Subset<T, authorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthorsAggregateArgs>(args: Subset<T, AuthorsAggregateArgs>): Prisma.PrismaPromise<GetAuthorsAggregateType<T>>

    /**
     * Group by Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends authorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: authorsGroupByArgs['orderBy'] }
        : { orderBy?: authorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, authorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the authors model
   */
  readonly fields: authorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for authors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__authorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    authors_recipes<T extends authors$authors_recipesArgs<ExtArgs> = {}>(args?: Subset<T, authors$authors_recipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authors_recipesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the authors model
   */
  interface authorsFieldRefs {
    readonly id: FieldRef<"authors", 'Int'>
    readonly name: FieldRef<"authors", 'String'>
  }
    

  // Custom InputTypes
  /**
   * authors findUnique
   */
  export type authorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors
     */
    select?: authorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authors
     */
    omit?: authorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorsInclude<ExtArgs> | null
    /**
     * Filter, which authors to fetch.
     */
    where: authorsWhereUniqueInput
  }

  /**
   * authors findUniqueOrThrow
   */
  export type authorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors
     */
    select?: authorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authors
     */
    omit?: authorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorsInclude<ExtArgs> | null
    /**
     * Filter, which authors to fetch.
     */
    where: authorsWhereUniqueInput
  }

  /**
   * authors findFirst
   */
  export type authorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors
     */
    select?: authorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authors
     */
    omit?: authorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorsInclude<ExtArgs> | null
    /**
     * Filter, which authors to fetch.
     */
    where?: authorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors to fetch.
     */
    orderBy?: authorsOrderByWithRelationInput | authorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authors.
     */
    cursor?: authorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authors.
     */
    distinct?: AuthorsScalarFieldEnum | AuthorsScalarFieldEnum[]
  }

  /**
   * authors findFirstOrThrow
   */
  export type authorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors
     */
    select?: authorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authors
     */
    omit?: authorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorsInclude<ExtArgs> | null
    /**
     * Filter, which authors to fetch.
     */
    where?: authorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors to fetch.
     */
    orderBy?: authorsOrderByWithRelationInput | authorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authors.
     */
    cursor?: authorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authors.
     */
    distinct?: AuthorsScalarFieldEnum | AuthorsScalarFieldEnum[]
  }

  /**
   * authors findMany
   */
  export type authorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors
     */
    select?: authorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authors
     */
    omit?: authorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorsInclude<ExtArgs> | null
    /**
     * Filter, which authors to fetch.
     */
    where?: authorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors to fetch.
     */
    orderBy?: authorsOrderByWithRelationInput | authorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing authors.
     */
    cursor?: authorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors.
     */
    skip?: number
    distinct?: AuthorsScalarFieldEnum | AuthorsScalarFieldEnum[]
  }

  /**
   * authors create
   */
  export type authorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors
     */
    select?: authorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authors
     */
    omit?: authorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorsInclude<ExtArgs> | null
    /**
     * The data needed to create a authors.
     */
    data: XOR<authorsCreateInput, authorsUncheckedCreateInput>
  }

  /**
   * authors createMany
   */
  export type authorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many authors.
     */
    data: authorsCreateManyInput | authorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * authors createManyAndReturn
   */
  export type authorsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors
     */
    select?: authorsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the authors
     */
    omit?: authorsOmit<ExtArgs> | null
    /**
     * The data used to create many authors.
     */
    data: authorsCreateManyInput | authorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * authors update
   */
  export type authorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors
     */
    select?: authorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authors
     */
    omit?: authorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorsInclude<ExtArgs> | null
    /**
     * The data needed to update a authors.
     */
    data: XOR<authorsUpdateInput, authorsUncheckedUpdateInput>
    /**
     * Choose, which authors to update.
     */
    where: authorsWhereUniqueInput
  }

  /**
   * authors updateMany
   */
  export type authorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update authors.
     */
    data: XOR<authorsUpdateManyMutationInput, authorsUncheckedUpdateManyInput>
    /**
     * Filter which authors to update
     */
    where?: authorsWhereInput
    /**
     * Limit how many authors to update.
     */
    limit?: number
  }

  /**
   * authors updateManyAndReturn
   */
  export type authorsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors
     */
    select?: authorsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the authors
     */
    omit?: authorsOmit<ExtArgs> | null
    /**
     * The data used to update authors.
     */
    data: XOR<authorsUpdateManyMutationInput, authorsUncheckedUpdateManyInput>
    /**
     * Filter which authors to update
     */
    where?: authorsWhereInput
    /**
     * Limit how many authors to update.
     */
    limit?: number
  }

  /**
   * authors upsert
   */
  export type authorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors
     */
    select?: authorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authors
     */
    omit?: authorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorsInclude<ExtArgs> | null
    /**
     * The filter to search for the authors to update in case it exists.
     */
    where: authorsWhereUniqueInput
    /**
     * In case the authors found by the `where` argument doesn't exist, create a new authors with this data.
     */
    create: XOR<authorsCreateInput, authorsUncheckedCreateInput>
    /**
     * In case the authors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<authorsUpdateInput, authorsUncheckedUpdateInput>
  }

  /**
   * authors delete
   */
  export type authorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors
     */
    select?: authorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authors
     */
    omit?: authorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorsInclude<ExtArgs> | null
    /**
     * Filter which authors to delete.
     */
    where: authorsWhereUniqueInput
  }

  /**
   * authors deleteMany
   */
  export type authorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authors to delete
     */
    where?: authorsWhereInput
    /**
     * Limit how many authors to delete.
     */
    limit?: number
  }

  /**
   * authors.authors_recipes
   */
  export type authors$authors_recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors_recipes
     */
    select?: authors_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authors_recipes
     */
    omit?: authors_recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authors_recipesInclude<ExtArgs> | null
    where?: authors_recipesWhereInput
    orderBy?: authors_recipesOrderByWithRelationInput | authors_recipesOrderByWithRelationInput[]
    cursor?: authors_recipesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Authors_recipesScalarFieldEnum | Authors_recipesScalarFieldEnum[]
  }

  /**
   * authors without action
   */
  export type authorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors
     */
    select?: authorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authors
     */
    omit?: authorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorsInclude<ExtArgs> | null
  }


  /**
   * Model authors_recipes
   */

  export type AggregateAuthors_recipes = {
    _count: Authors_recipesCountAggregateOutputType | null
    _avg: Authors_recipesAvgAggregateOutputType | null
    _sum: Authors_recipesSumAggregateOutputType | null
    _min: Authors_recipesMinAggregateOutputType | null
    _max: Authors_recipesMaxAggregateOutputType | null
  }

  export type Authors_recipesAvgAggregateOutputType = {
    id: number | null
    author_id: number | null
    recipe_id: number | null
  }

  export type Authors_recipesSumAggregateOutputType = {
    id: number | null
    author_id: number | null
    recipe_id: number | null
  }

  export type Authors_recipesMinAggregateOutputType = {
    id: number | null
    author_id: number | null
    recipe_id: number | null
  }

  export type Authors_recipesMaxAggregateOutputType = {
    id: number | null
    author_id: number | null
    recipe_id: number | null
  }

  export type Authors_recipesCountAggregateOutputType = {
    id: number
    author_id: number
    recipe_id: number
    _all: number
  }


  export type Authors_recipesAvgAggregateInputType = {
    id?: true
    author_id?: true
    recipe_id?: true
  }

  export type Authors_recipesSumAggregateInputType = {
    id?: true
    author_id?: true
    recipe_id?: true
  }

  export type Authors_recipesMinAggregateInputType = {
    id?: true
    author_id?: true
    recipe_id?: true
  }

  export type Authors_recipesMaxAggregateInputType = {
    id?: true
    author_id?: true
    recipe_id?: true
  }

  export type Authors_recipesCountAggregateInputType = {
    id?: true
    author_id?: true
    recipe_id?: true
    _all?: true
  }

  export type Authors_recipesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authors_recipes to aggregate.
     */
    where?: authors_recipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors_recipes to fetch.
     */
    orderBy?: authors_recipesOrderByWithRelationInput | authors_recipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: authors_recipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors_recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors_recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned authors_recipes
    **/
    _count?: true | Authors_recipesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Authors_recipesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Authors_recipesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Authors_recipesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Authors_recipesMaxAggregateInputType
  }

  export type GetAuthors_recipesAggregateType<T extends Authors_recipesAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthors_recipes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthors_recipes[P]>
      : GetScalarType<T[P], AggregateAuthors_recipes[P]>
  }




  export type authors_recipesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: authors_recipesWhereInput
    orderBy?: authors_recipesOrderByWithAggregationInput | authors_recipesOrderByWithAggregationInput[]
    by: Authors_recipesScalarFieldEnum[] | Authors_recipesScalarFieldEnum
    having?: authors_recipesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Authors_recipesCountAggregateInputType | true
    _avg?: Authors_recipesAvgAggregateInputType
    _sum?: Authors_recipesSumAggregateInputType
    _min?: Authors_recipesMinAggregateInputType
    _max?: Authors_recipesMaxAggregateInputType
  }

  export type Authors_recipesGroupByOutputType = {
    id: number
    author_id: number
    recipe_id: number
    _count: Authors_recipesCountAggregateOutputType | null
    _avg: Authors_recipesAvgAggregateOutputType | null
    _sum: Authors_recipesSumAggregateOutputType | null
    _min: Authors_recipesMinAggregateOutputType | null
    _max: Authors_recipesMaxAggregateOutputType | null
  }

  type GetAuthors_recipesGroupByPayload<T extends authors_recipesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Authors_recipesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Authors_recipesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Authors_recipesGroupByOutputType[P]>
            : GetScalarType<T[P], Authors_recipesGroupByOutputType[P]>
        }
      >
    >


  export type authors_recipesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author_id?: boolean
    recipe_id?: boolean
    authors?: boolean | authorsDefaultArgs<ExtArgs>
    recipes?: boolean | recipesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authors_recipes"]>

  export type authors_recipesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author_id?: boolean
    recipe_id?: boolean
    authors?: boolean | authorsDefaultArgs<ExtArgs>
    recipes?: boolean | recipesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authors_recipes"]>

  export type authors_recipesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author_id?: boolean
    recipe_id?: boolean
    authors?: boolean | authorsDefaultArgs<ExtArgs>
    recipes?: boolean | recipesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authors_recipes"]>

  export type authors_recipesSelectScalar = {
    id?: boolean
    author_id?: boolean
    recipe_id?: boolean
  }

  export type authors_recipesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "author_id" | "recipe_id", ExtArgs["result"]["authors_recipes"]>
  export type authors_recipesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authors?: boolean | authorsDefaultArgs<ExtArgs>
    recipes?: boolean | recipesDefaultArgs<ExtArgs>
  }
  export type authors_recipesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authors?: boolean | authorsDefaultArgs<ExtArgs>
    recipes?: boolean | recipesDefaultArgs<ExtArgs>
  }
  export type authors_recipesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authors?: boolean | authorsDefaultArgs<ExtArgs>
    recipes?: boolean | recipesDefaultArgs<ExtArgs>
  }

  export type $authors_recipesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "authors_recipes"
    objects: {
      authors: Prisma.$authorsPayload<ExtArgs>
      recipes: Prisma.$recipesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      author_id: number
      recipe_id: number
    }, ExtArgs["result"]["authors_recipes"]>
    composites: {}
  }

  type authors_recipesGetPayload<S extends boolean | null | undefined | authors_recipesDefaultArgs> = $Result.GetResult<Prisma.$authors_recipesPayload, S>

  type authors_recipesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<authors_recipesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Authors_recipesCountAggregateInputType | true
    }

  export interface authors_recipesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['authors_recipes'], meta: { name: 'authors_recipes' } }
    /**
     * Find zero or one Authors_recipes that matches the filter.
     * @param {authors_recipesFindUniqueArgs} args - Arguments to find a Authors_recipes
     * @example
     * // Get one Authors_recipes
     * const authors_recipes = await prisma.authors_recipes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends authors_recipesFindUniqueArgs>(args: SelectSubset<T, authors_recipesFindUniqueArgs<ExtArgs>>): Prisma__authors_recipesClient<$Result.GetResult<Prisma.$authors_recipesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Authors_recipes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {authors_recipesFindUniqueOrThrowArgs} args - Arguments to find a Authors_recipes
     * @example
     * // Get one Authors_recipes
     * const authors_recipes = await prisma.authors_recipes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends authors_recipesFindUniqueOrThrowArgs>(args: SelectSubset<T, authors_recipesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__authors_recipesClient<$Result.GetResult<Prisma.$authors_recipesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authors_recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authors_recipesFindFirstArgs} args - Arguments to find a Authors_recipes
     * @example
     * // Get one Authors_recipes
     * const authors_recipes = await prisma.authors_recipes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends authors_recipesFindFirstArgs>(args?: SelectSubset<T, authors_recipesFindFirstArgs<ExtArgs>>): Prisma__authors_recipesClient<$Result.GetResult<Prisma.$authors_recipesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authors_recipes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authors_recipesFindFirstOrThrowArgs} args - Arguments to find a Authors_recipes
     * @example
     * // Get one Authors_recipes
     * const authors_recipes = await prisma.authors_recipes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends authors_recipesFindFirstOrThrowArgs>(args?: SelectSubset<T, authors_recipesFindFirstOrThrowArgs<ExtArgs>>): Prisma__authors_recipesClient<$Result.GetResult<Prisma.$authors_recipesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Authors_recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authors_recipesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authors_recipes
     * const authors_recipes = await prisma.authors_recipes.findMany()
     * 
     * // Get first 10 Authors_recipes
     * const authors_recipes = await prisma.authors_recipes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authors_recipesWithIdOnly = await prisma.authors_recipes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends authors_recipesFindManyArgs>(args?: SelectSubset<T, authors_recipesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authors_recipesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Authors_recipes.
     * @param {authors_recipesCreateArgs} args - Arguments to create a Authors_recipes.
     * @example
     * // Create one Authors_recipes
     * const Authors_recipes = await prisma.authors_recipes.create({
     *   data: {
     *     // ... data to create a Authors_recipes
     *   }
     * })
     * 
     */
    create<T extends authors_recipesCreateArgs>(args: SelectSubset<T, authors_recipesCreateArgs<ExtArgs>>): Prisma__authors_recipesClient<$Result.GetResult<Prisma.$authors_recipesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Authors_recipes.
     * @param {authors_recipesCreateManyArgs} args - Arguments to create many Authors_recipes.
     * @example
     * // Create many Authors_recipes
     * const authors_recipes = await prisma.authors_recipes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends authors_recipesCreateManyArgs>(args?: SelectSubset<T, authors_recipesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Authors_recipes and returns the data saved in the database.
     * @param {authors_recipesCreateManyAndReturnArgs} args - Arguments to create many Authors_recipes.
     * @example
     * // Create many Authors_recipes
     * const authors_recipes = await prisma.authors_recipes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Authors_recipes and only return the `id`
     * const authors_recipesWithIdOnly = await prisma.authors_recipes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends authors_recipesCreateManyAndReturnArgs>(args?: SelectSubset<T, authors_recipesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authors_recipesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Authors_recipes.
     * @param {authors_recipesDeleteArgs} args - Arguments to delete one Authors_recipes.
     * @example
     * // Delete one Authors_recipes
     * const Authors_recipes = await prisma.authors_recipes.delete({
     *   where: {
     *     // ... filter to delete one Authors_recipes
     *   }
     * })
     * 
     */
    delete<T extends authors_recipesDeleteArgs>(args: SelectSubset<T, authors_recipesDeleteArgs<ExtArgs>>): Prisma__authors_recipesClient<$Result.GetResult<Prisma.$authors_recipesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Authors_recipes.
     * @param {authors_recipesUpdateArgs} args - Arguments to update one Authors_recipes.
     * @example
     * // Update one Authors_recipes
     * const authors_recipes = await prisma.authors_recipes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends authors_recipesUpdateArgs>(args: SelectSubset<T, authors_recipesUpdateArgs<ExtArgs>>): Prisma__authors_recipesClient<$Result.GetResult<Prisma.$authors_recipesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Authors_recipes.
     * @param {authors_recipesDeleteManyArgs} args - Arguments to filter Authors_recipes to delete.
     * @example
     * // Delete a few Authors_recipes
     * const { count } = await prisma.authors_recipes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends authors_recipesDeleteManyArgs>(args?: SelectSubset<T, authors_recipesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors_recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authors_recipesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authors_recipes
     * const authors_recipes = await prisma.authors_recipes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends authors_recipesUpdateManyArgs>(args: SelectSubset<T, authors_recipesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors_recipes and returns the data updated in the database.
     * @param {authors_recipesUpdateManyAndReturnArgs} args - Arguments to update many Authors_recipes.
     * @example
     * // Update many Authors_recipes
     * const authors_recipes = await prisma.authors_recipes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Authors_recipes and only return the `id`
     * const authors_recipesWithIdOnly = await prisma.authors_recipes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends authors_recipesUpdateManyAndReturnArgs>(args: SelectSubset<T, authors_recipesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authors_recipesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Authors_recipes.
     * @param {authors_recipesUpsertArgs} args - Arguments to update or create a Authors_recipes.
     * @example
     * // Update or create a Authors_recipes
     * const authors_recipes = await prisma.authors_recipes.upsert({
     *   create: {
     *     // ... data to create a Authors_recipes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Authors_recipes we want to update
     *   }
     * })
     */
    upsert<T extends authors_recipesUpsertArgs>(args: SelectSubset<T, authors_recipesUpsertArgs<ExtArgs>>): Prisma__authors_recipesClient<$Result.GetResult<Prisma.$authors_recipesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Authors_recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authors_recipesCountArgs} args - Arguments to filter Authors_recipes to count.
     * @example
     * // Count the number of Authors_recipes
     * const count = await prisma.authors_recipes.count({
     *   where: {
     *     // ... the filter for the Authors_recipes we want to count
     *   }
     * })
    **/
    count<T extends authors_recipesCountArgs>(
      args?: Subset<T, authors_recipesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Authors_recipesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Authors_recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Authors_recipesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Authors_recipesAggregateArgs>(args: Subset<T, Authors_recipesAggregateArgs>): Prisma.PrismaPromise<GetAuthors_recipesAggregateType<T>>

    /**
     * Group by Authors_recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authors_recipesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends authors_recipesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: authors_recipesGroupByArgs['orderBy'] }
        : { orderBy?: authors_recipesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, authors_recipesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthors_recipesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the authors_recipes model
   */
  readonly fields: authors_recipesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for authors_recipes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__authors_recipesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    authors<T extends authorsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, authorsDefaultArgs<ExtArgs>>): Prisma__authorsClient<$Result.GetResult<Prisma.$authorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recipes<T extends recipesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, recipesDefaultArgs<ExtArgs>>): Prisma__recipesClient<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the authors_recipes model
   */
  interface authors_recipesFieldRefs {
    readonly id: FieldRef<"authors_recipes", 'Int'>
    readonly author_id: FieldRef<"authors_recipes", 'Int'>
    readonly recipe_id: FieldRef<"authors_recipes", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * authors_recipes findUnique
   */
  export type authors_recipesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors_recipes
     */
    select?: authors_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authors_recipes
     */
    omit?: authors_recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authors_recipesInclude<ExtArgs> | null
    /**
     * Filter, which authors_recipes to fetch.
     */
    where: authors_recipesWhereUniqueInput
  }

  /**
   * authors_recipes findUniqueOrThrow
   */
  export type authors_recipesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors_recipes
     */
    select?: authors_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authors_recipes
     */
    omit?: authors_recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authors_recipesInclude<ExtArgs> | null
    /**
     * Filter, which authors_recipes to fetch.
     */
    where: authors_recipesWhereUniqueInput
  }

  /**
   * authors_recipes findFirst
   */
  export type authors_recipesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors_recipes
     */
    select?: authors_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authors_recipes
     */
    omit?: authors_recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authors_recipesInclude<ExtArgs> | null
    /**
     * Filter, which authors_recipes to fetch.
     */
    where?: authors_recipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors_recipes to fetch.
     */
    orderBy?: authors_recipesOrderByWithRelationInput | authors_recipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authors_recipes.
     */
    cursor?: authors_recipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors_recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors_recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authors_recipes.
     */
    distinct?: Authors_recipesScalarFieldEnum | Authors_recipesScalarFieldEnum[]
  }

  /**
   * authors_recipes findFirstOrThrow
   */
  export type authors_recipesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors_recipes
     */
    select?: authors_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authors_recipes
     */
    omit?: authors_recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authors_recipesInclude<ExtArgs> | null
    /**
     * Filter, which authors_recipes to fetch.
     */
    where?: authors_recipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors_recipes to fetch.
     */
    orderBy?: authors_recipesOrderByWithRelationInput | authors_recipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authors_recipes.
     */
    cursor?: authors_recipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors_recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors_recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authors_recipes.
     */
    distinct?: Authors_recipesScalarFieldEnum | Authors_recipesScalarFieldEnum[]
  }

  /**
   * authors_recipes findMany
   */
  export type authors_recipesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors_recipes
     */
    select?: authors_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authors_recipes
     */
    omit?: authors_recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authors_recipesInclude<ExtArgs> | null
    /**
     * Filter, which authors_recipes to fetch.
     */
    where?: authors_recipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors_recipes to fetch.
     */
    orderBy?: authors_recipesOrderByWithRelationInput | authors_recipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing authors_recipes.
     */
    cursor?: authors_recipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors_recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors_recipes.
     */
    skip?: number
    distinct?: Authors_recipesScalarFieldEnum | Authors_recipesScalarFieldEnum[]
  }

  /**
   * authors_recipes create
   */
  export type authors_recipesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors_recipes
     */
    select?: authors_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authors_recipes
     */
    omit?: authors_recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authors_recipesInclude<ExtArgs> | null
    /**
     * The data needed to create a authors_recipes.
     */
    data: XOR<authors_recipesCreateInput, authors_recipesUncheckedCreateInput>
  }

  /**
   * authors_recipes createMany
   */
  export type authors_recipesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many authors_recipes.
     */
    data: authors_recipesCreateManyInput | authors_recipesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * authors_recipes createManyAndReturn
   */
  export type authors_recipesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors_recipes
     */
    select?: authors_recipesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the authors_recipes
     */
    omit?: authors_recipesOmit<ExtArgs> | null
    /**
     * The data used to create many authors_recipes.
     */
    data: authors_recipesCreateManyInput | authors_recipesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authors_recipesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * authors_recipes update
   */
  export type authors_recipesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors_recipes
     */
    select?: authors_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authors_recipes
     */
    omit?: authors_recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authors_recipesInclude<ExtArgs> | null
    /**
     * The data needed to update a authors_recipes.
     */
    data: XOR<authors_recipesUpdateInput, authors_recipesUncheckedUpdateInput>
    /**
     * Choose, which authors_recipes to update.
     */
    where: authors_recipesWhereUniqueInput
  }

  /**
   * authors_recipes updateMany
   */
  export type authors_recipesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update authors_recipes.
     */
    data: XOR<authors_recipesUpdateManyMutationInput, authors_recipesUncheckedUpdateManyInput>
    /**
     * Filter which authors_recipes to update
     */
    where?: authors_recipesWhereInput
    /**
     * Limit how many authors_recipes to update.
     */
    limit?: number
  }

  /**
   * authors_recipes updateManyAndReturn
   */
  export type authors_recipesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors_recipes
     */
    select?: authors_recipesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the authors_recipes
     */
    omit?: authors_recipesOmit<ExtArgs> | null
    /**
     * The data used to update authors_recipes.
     */
    data: XOR<authors_recipesUpdateManyMutationInput, authors_recipesUncheckedUpdateManyInput>
    /**
     * Filter which authors_recipes to update
     */
    where?: authors_recipesWhereInput
    /**
     * Limit how many authors_recipes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authors_recipesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * authors_recipes upsert
   */
  export type authors_recipesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors_recipes
     */
    select?: authors_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authors_recipes
     */
    omit?: authors_recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authors_recipesInclude<ExtArgs> | null
    /**
     * The filter to search for the authors_recipes to update in case it exists.
     */
    where: authors_recipesWhereUniqueInput
    /**
     * In case the authors_recipes found by the `where` argument doesn't exist, create a new authors_recipes with this data.
     */
    create: XOR<authors_recipesCreateInput, authors_recipesUncheckedCreateInput>
    /**
     * In case the authors_recipes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<authors_recipesUpdateInput, authors_recipesUncheckedUpdateInput>
  }

  /**
   * authors_recipes delete
   */
  export type authors_recipesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors_recipes
     */
    select?: authors_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authors_recipes
     */
    omit?: authors_recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authors_recipesInclude<ExtArgs> | null
    /**
     * Filter which authors_recipes to delete.
     */
    where: authors_recipesWhereUniqueInput
  }

  /**
   * authors_recipes deleteMany
   */
  export type authors_recipesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authors_recipes to delete
     */
    where?: authors_recipesWhereInput
    /**
     * Limit how many authors_recipes to delete.
     */
    limit?: number
  }

  /**
   * authors_recipes without action
   */
  export type authors_recipesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors_recipes
     */
    select?: authors_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authors_recipes
     */
    omit?: authors_recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authors_recipesInclude<ExtArgs> | null
  }


  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithAggregationInput | categoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: number
    name: string
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    categories_recipes?: boolean | categories$categories_recipesArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["categories"]>
  export type categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories_recipes?: boolean | categories$categories_recipesArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories"
    objects: {
      categories_recipes: Prisma.$categories_recipesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = $Result.GetResult<Prisma.$categoriesPayload, S>

  type categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories'], meta: { name: 'categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriesFindUniqueArgs>(args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriesFindFirstArgs>(args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoriesFindManyArgs>(args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends categoriesCreateArgs>(args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriesCreateManyArgs>(args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends categoriesDeleteArgs>(args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriesUpdateArgs>(args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriesDeleteManyArgs>(args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriesUpdateManyArgs>(args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends categoriesUpsertArgs>(args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs['orderBy'] }
        : { orderBy?: categoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categories model
   */
  readonly fields: categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories_recipes<T extends categories$categories_recipesArgs<ExtArgs> = {}>(args?: Subset<T, categories$categories_recipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categories_recipesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the categories model
   */
  interface categoriesFieldRefs {
    readonly id: FieldRef<"categories", 'Int'>
    readonly name: FieldRef<"categories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a categories.
     */
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }

  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories createManyAndReturn
   */
  export type categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories updateManyAndReturn
   */
  export type categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }

  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * categories.categories_recipes
   */
  export type categories$categories_recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories_recipes
     */
    select?: categories_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories_recipes
     */
    omit?: categories_recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categories_recipesInclude<ExtArgs> | null
    where?: categories_recipesWhereInput
    orderBy?: categories_recipesOrderByWithRelationInput | categories_recipesOrderByWithRelationInput[]
    cursor?: categories_recipesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Categories_recipesScalarFieldEnum | Categories_recipesScalarFieldEnum[]
  }

  /**
   * categories without action
   */
  export type categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
  }


  /**
   * Model categories_recipes
   */

  export type AggregateCategories_recipes = {
    _count: Categories_recipesCountAggregateOutputType | null
    _avg: Categories_recipesAvgAggregateOutputType | null
    _sum: Categories_recipesSumAggregateOutputType | null
    _min: Categories_recipesMinAggregateOutputType | null
    _max: Categories_recipesMaxAggregateOutputType | null
  }

  export type Categories_recipesAvgAggregateOutputType = {
    id: number | null
    category_id: number | null
    recipe_id: number | null
  }

  export type Categories_recipesSumAggregateOutputType = {
    id: number | null
    category_id: number | null
    recipe_id: number | null
  }

  export type Categories_recipesMinAggregateOutputType = {
    id: number | null
    category_id: number | null
    recipe_id: number | null
  }

  export type Categories_recipesMaxAggregateOutputType = {
    id: number | null
    category_id: number | null
    recipe_id: number | null
  }

  export type Categories_recipesCountAggregateOutputType = {
    id: number
    category_id: number
    recipe_id: number
    _all: number
  }


  export type Categories_recipesAvgAggregateInputType = {
    id?: true
    category_id?: true
    recipe_id?: true
  }

  export type Categories_recipesSumAggregateInputType = {
    id?: true
    category_id?: true
    recipe_id?: true
  }

  export type Categories_recipesMinAggregateInputType = {
    id?: true
    category_id?: true
    recipe_id?: true
  }

  export type Categories_recipesMaxAggregateInputType = {
    id?: true
    category_id?: true
    recipe_id?: true
  }

  export type Categories_recipesCountAggregateInputType = {
    id?: true
    category_id?: true
    recipe_id?: true
    _all?: true
  }

  export type Categories_recipesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories_recipes to aggregate.
     */
    where?: categories_recipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories_recipes to fetch.
     */
    orderBy?: categories_recipesOrderByWithRelationInput | categories_recipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categories_recipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories_recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories_recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories_recipes
    **/
    _count?: true | Categories_recipesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Categories_recipesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Categories_recipesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Categories_recipesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Categories_recipesMaxAggregateInputType
  }

  export type GetCategories_recipesAggregateType<T extends Categories_recipesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories_recipes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories_recipes[P]>
      : GetScalarType<T[P], AggregateCategories_recipes[P]>
  }




  export type categories_recipesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categories_recipesWhereInput
    orderBy?: categories_recipesOrderByWithAggregationInput | categories_recipesOrderByWithAggregationInput[]
    by: Categories_recipesScalarFieldEnum[] | Categories_recipesScalarFieldEnum
    having?: categories_recipesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Categories_recipesCountAggregateInputType | true
    _avg?: Categories_recipesAvgAggregateInputType
    _sum?: Categories_recipesSumAggregateInputType
    _min?: Categories_recipesMinAggregateInputType
    _max?: Categories_recipesMaxAggregateInputType
  }

  export type Categories_recipesGroupByOutputType = {
    id: number
    category_id: number
    recipe_id: number
    _count: Categories_recipesCountAggregateOutputType | null
    _avg: Categories_recipesAvgAggregateOutputType | null
    _sum: Categories_recipesSumAggregateOutputType | null
    _min: Categories_recipesMinAggregateOutputType | null
    _max: Categories_recipesMaxAggregateOutputType | null
  }

  type GetCategories_recipesGroupByPayload<T extends categories_recipesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Categories_recipesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Categories_recipesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Categories_recipesGroupByOutputType[P]>
            : GetScalarType<T[P], Categories_recipesGroupByOutputType[P]>
        }
      >
    >


  export type categories_recipesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_id?: boolean
    recipe_id?: boolean
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    recipes?: boolean | recipesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories_recipes"]>

  export type categories_recipesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_id?: boolean
    recipe_id?: boolean
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    recipes?: boolean | recipesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories_recipes"]>

  export type categories_recipesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_id?: boolean
    recipe_id?: boolean
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    recipes?: boolean | recipesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories_recipes"]>

  export type categories_recipesSelectScalar = {
    id?: boolean
    category_id?: boolean
    recipe_id?: boolean
  }

  export type categories_recipesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category_id" | "recipe_id", ExtArgs["result"]["categories_recipes"]>
  export type categories_recipesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    recipes?: boolean | recipesDefaultArgs<ExtArgs>
  }
  export type categories_recipesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    recipes?: boolean | recipesDefaultArgs<ExtArgs>
  }
  export type categories_recipesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    recipes?: boolean | recipesDefaultArgs<ExtArgs>
  }

  export type $categories_recipesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories_recipes"
    objects: {
      categories: Prisma.$categoriesPayload<ExtArgs>
      recipes: Prisma.$recipesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      category_id: number
      recipe_id: number
    }, ExtArgs["result"]["categories_recipes"]>
    composites: {}
  }

  type categories_recipesGetPayload<S extends boolean | null | undefined | categories_recipesDefaultArgs> = $Result.GetResult<Prisma.$categories_recipesPayload, S>

  type categories_recipesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categories_recipesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Categories_recipesCountAggregateInputType | true
    }

  export interface categories_recipesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories_recipes'], meta: { name: 'categories_recipes' } }
    /**
     * Find zero or one Categories_recipes that matches the filter.
     * @param {categories_recipesFindUniqueArgs} args - Arguments to find a Categories_recipes
     * @example
     * // Get one Categories_recipes
     * const categories_recipes = await prisma.categories_recipes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categories_recipesFindUniqueArgs>(args: SelectSubset<T, categories_recipesFindUniqueArgs<ExtArgs>>): Prisma__categories_recipesClient<$Result.GetResult<Prisma.$categories_recipesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories_recipes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categories_recipesFindUniqueOrThrowArgs} args - Arguments to find a Categories_recipes
     * @example
     * // Get one Categories_recipes
     * const categories_recipes = await prisma.categories_recipes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categories_recipesFindUniqueOrThrowArgs>(args: SelectSubset<T, categories_recipesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categories_recipesClient<$Result.GetResult<Prisma.$categories_recipesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories_recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categories_recipesFindFirstArgs} args - Arguments to find a Categories_recipes
     * @example
     * // Get one Categories_recipes
     * const categories_recipes = await prisma.categories_recipes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categories_recipesFindFirstArgs>(args?: SelectSubset<T, categories_recipesFindFirstArgs<ExtArgs>>): Prisma__categories_recipesClient<$Result.GetResult<Prisma.$categories_recipesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories_recipes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categories_recipesFindFirstOrThrowArgs} args - Arguments to find a Categories_recipes
     * @example
     * // Get one Categories_recipes
     * const categories_recipes = await prisma.categories_recipes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categories_recipesFindFirstOrThrowArgs>(args?: SelectSubset<T, categories_recipesFindFirstOrThrowArgs<ExtArgs>>): Prisma__categories_recipesClient<$Result.GetResult<Prisma.$categories_recipesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories_recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categories_recipesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories_recipes
     * const categories_recipes = await prisma.categories_recipes.findMany()
     * 
     * // Get first 10 Categories_recipes
     * const categories_recipes = await prisma.categories_recipes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categories_recipesWithIdOnly = await prisma.categories_recipes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categories_recipesFindManyArgs>(args?: SelectSubset<T, categories_recipesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categories_recipesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories_recipes.
     * @param {categories_recipesCreateArgs} args - Arguments to create a Categories_recipes.
     * @example
     * // Create one Categories_recipes
     * const Categories_recipes = await prisma.categories_recipes.create({
     *   data: {
     *     // ... data to create a Categories_recipes
     *   }
     * })
     * 
     */
    create<T extends categories_recipesCreateArgs>(args: SelectSubset<T, categories_recipesCreateArgs<ExtArgs>>): Prisma__categories_recipesClient<$Result.GetResult<Prisma.$categories_recipesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories_recipes.
     * @param {categories_recipesCreateManyArgs} args - Arguments to create many Categories_recipes.
     * @example
     * // Create many Categories_recipes
     * const categories_recipes = await prisma.categories_recipes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categories_recipesCreateManyArgs>(args?: SelectSubset<T, categories_recipesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories_recipes and returns the data saved in the database.
     * @param {categories_recipesCreateManyAndReturnArgs} args - Arguments to create many Categories_recipes.
     * @example
     * // Create many Categories_recipes
     * const categories_recipes = await prisma.categories_recipes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories_recipes and only return the `id`
     * const categories_recipesWithIdOnly = await prisma.categories_recipes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categories_recipesCreateManyAndReturnArgs>(args?: SelectSubset<T, categories_recipesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categories_recipesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories_recipes.
     * @param {categories_recipesDeleteArgs} args - Arguments to delete one Categories_recipes.
     * @example
     * // Delete one Categories_recipes
     * const Categories_recipes = await prisma.categories_recipes.delete({
     *   where: {
     *     // ... filter to delete one Categories_recipes
     *   }
     * })
     * 
     */
    delete<T extends categories_recipesDeleteArgs>(args: SelectSubset<T, categories_recipesDeleteArgs<ExtArgs>>): Prisma__categories_recipesClient<$Result.GetResult<Prisma.$categories_recipesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories_recipes.
     * @param {categories_recipesUpdateArgs} args - Arguments to update one Categories_recipes.
     * @example
     * // Update one Categories_recipes
     * const categories_recipes = await prisma.categories_recipes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categories_recipesUpdateArgs>(args: SelectSubset<T, categories_recipesUpdateArgs<ExtArgs>>): Prisma__categories_recipesClient<$Result.GetResult<Prisma.$categories_recipesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories_recipes.
     * @param {categories_recipesDeleteManyArgs} args - Arguments to filter Categories_recipes to delete.
     * @example
     * // Delete a few Categories_recipes
     * const { count } = await prisma.categories_recipes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categories_recipesDeleteManyArgs>(args?: SelectSubset<T, categories_recipesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories_recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categories_recipesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories_recipes
     * const categories_recipes = await prisma.categories_recipes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categories_recipesUpdateManyArgs>(args: SelectSubset<T, categories_recipesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories_recipes and returns the data updated in the database.
     * @param {categories_recipesUpdateManyAndReturnArgs} args - Arguments to update many Categories_recipes.
     * @example
     * // Update many Categories_recipes
     * const categories_recipes = await prisma.categories_recipes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories_recipes and only return the `id`
     * const categories_recipesWithIdOnly = await prisma.categories_recipes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categories_recipesUpdateManyAndReturnArgs>(args: SelectSubset<T, categories_recipesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categories_recipesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories_recipes.
     * @param {categories_recipesUpsertArgs} args - Arguments to update or create a Categories_recipes.
     * @example
     * // Update or create a Categories_recipes
     * const categories_recipes = await prisma.categories_recipes.upsert({
     *   create: {
     *     // ... data to create a Categories_recipes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories_recipes we want to update
     *   }
     * })
     */
    upsert<T extends categories_recipesUpsertArgs>(args: SelectSubset<T, categories_recipesUpsertArgs<ExtArgs>>): Prisma__categories_recipesClient<$Result.GetResult<Prisma.$categories_recipesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories_recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categories_recipesCountArgs} args - Arguments to filter Categories_recipes to count.
     * @example
     * // Count the number of Categories_recipes
     * const count = await prisma.categories_recipes.count({
     *   where: {
     *     // ... the filter for the Categories_recipes we want to count
     *   }
     * })
    **/
    count<T extends categories_recipesCountArgs>(
      args?: Subset<T, categories_recipesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Categories_recipesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories_recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Categories_recipesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Categories_recipesAggregateArgs>(args: Subset<T, Categories_recipesAggregateArgs>): Prisma.PrismaPromise<GetCategories_recipesAggregateType<T>>

    /**
     * Group by Categories_recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categories_recipesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categories_recipesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categories_recipesGroupByArgs['orderBy'] }
        : { orderBy?: categories_recipesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categories_recipesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategories_recipesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categories_recipes model
   */
  readonly fields: categories_recipesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories_recipes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categories_recipesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends categoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoriesDefaultArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recipes<T extends recipesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, recipesDefaultArgs<ExtArgs>>): Prisma__recipesClient<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the categories_recipes model
   */
  interface categories_recipesFieldRefs {
    readonly id: FieldRef<"categories_recipes", 'Int'>
    readonly category_id: FieldRef<"categories_recipes", 'Int'>
    readonly recipe_id: FieldRef<"categories_recipes", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * categories_recipes findUnique
   */
  export type categories_recipesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories_recipes
     */
    select?: categories_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories_recipes
     */
    omit?: categories_recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categories_recipesInclude<ExtArgs> | null
    /**
     * Filter, which categories_recipes to fetch.
     */
    where: categories_recipesWhereUniqueInput
  }

  /**
   * categories_recipes findUniqueOrThrow
   */
  export type categories_recipesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories_recipes
     */
    select?: categories_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories_recipes
     */
    omit?: categories_recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categories_recipesInclude<ExtArgs> | null
    /**
     * Filter, which categories_recipes to fetch.
     */
    where: categories_recipesWhereUniqueInput
  }

  /**
   * categories_recipes findFirst
   */
  export type categories_recipesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories_recipes
     */
    select?: categories_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories_recipes
     */
    omit?: categories_recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categories_recipesInclude<ExtArgs> | null
    /**
     * Filter, which categories_recipes to fetch.
     */
    where?: categories_recipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories_recipes to fetch.
     */
    orderBy?: categories_recipesOrderByWithRelationInput | categories_recipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories_recipes.
     */
    cursor?: categories_recipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories_recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories_recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories_recipes.
     */
    distinct?: Categories_recipesScalarFieldEnum | Categories_recipesScalarFieldEnum[]
  }

  /**
   * categories_recipes findFirstOrThrow
   */
  export type categories_recipesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories_recipes
     */
    select?: categories_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories_recipes
     */
    omit?: categories_recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categories_recipesInclude<ExtArgs> | null
    /**
     * Filter, which categories_recipes to fetch.
     */
    where?: categories_recipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories_recipes to fetch.
     */
    orderBy?: categories_recipesOrderByWithRelationInput | categories_recipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories_recipes.
     */
    cursor?: categories_recipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories_recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories_recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories_recipes.
     */
    distinct?: Categories_recipesScalarFieldEnum | Categories_recipesScalarFieldEnum[]
  }

  /**
   * categories_recipes findMany
   */
  export type categories_recipesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories_recipes
     */
    select?: categories_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories_recipes
     */
    omit?: categories_recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categories_recipesInclude<ExtArgs> | null
    /**
     * Filter, which categories_recipes to fetch.
     */
    where?: categories_recipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories_recipes to fetch.
     */
    orderBy?: categories_recipesOrderByWithRelationInput | categories_recipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories_recipes.
     */
    cursor?: categories_recipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories_recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories_recipes.
     */
    skip?: number
    distinct?: Categories_recipesScalarFieldEnum | Categories_recipesScalarFieldEnum[]
  }

  /**
   * categories_recipes create
   */
  export type categories_recipesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories_recipes
     */
    select?: categories_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories_recipes
     */
    omit?: categories_recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categories_recipesInclude<ExtArgs> | null
    /**
     * The data needed to create a categories_recipes.
     */
    data: XOR<categories_recipesCreateInput, categories_recipesUncheckedCreateInput>
  }

  /**
   * categories_recipes createMany
   */
  export type categories_recipesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories_recipes.
     */
    data: categories_recipesCreateManyInput | categories_recipesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories_recipes createManyAndReturn
   */
  export type categories_recipesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories_recipes
     */
    select?: categories_recipesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories_recipes
     */
    omit?: categories_recipesOmit<ExtArgs> | null
    /**
     * The data used to create many categories_recipes.
     */
    data: categories_recipesCreateManyInput | categories_recipesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categories_recipesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * categories_recipes update
   */
  export type categories_recipesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories_recipes
     */
    select?: categories_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories_recipes
     */
    omit?: categories_recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categories_recipesInclude<ExtArgs> | null
    /**
     * The data needed to update a categories_recipes.
     */
    data: XOR<categories_recipesUpdateInput, categories_recipesUncheckedUpdateInput>
    /**
     * Choose, which categories_recipes to update.
     */
    where: categories_recipesWhereUniqueInput
  }

  /**
   * categories_recipes updateMany
   */
  export type categories_recipesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories_recipes.
     */
    data: XOR<categories_recipesUpdateManyMutationInput, categories_recipesUncheckedUpdateManyInput>
    /**
     * Filter which categories_recipes to update
     */
    where?: categories_recipesWhereInput
    /**
     * Limit how many categories_recipes to update.
     */
    limit?: number
  }

  /**
   * categories_recipes updateManyAndReturn
   */
  export type categories_recipesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories_recipes
     */
    select?: categories_recipesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories_recipes
     */
    omit?: categories_recipesOmit<ExtArgs> | null
    /**
     * The data used to update categories_recipes.
     */
    data: XOR<categories_recipesUpdateManyMutationInput, categories_recipesUncheckedUpdateManyInput>
    /**
     * Filter which categories_recipes to update
     */
    where?: categories_recipesWhereInput
    /**
     * Limit how many categories_recipes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categories_recipesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * categories_recipes upsert
   */
  export type categories_recipesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories_recipes
     */
    select?: categories_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories_recipes
     */
    omit?: categories_recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categories_recipesInclude<ExtArgs> | null
    /**
     * The filter to search for the categories_recipes to update in case it exists.
     */
    where: categories_recipesWhereUniqueInput
    /**
     * In case the categories_recipes found by the `where` argument doesn't exist, create a new categories_recipes with this data.
     */
    create: XOR<categories_recipesCreateInput, categories_recipesUncheckedCreateInput>
    /**
     * In case the categories_recipes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categories_recipesUpdateInput, categories_recipesUncheckedUpdateInput>
  }

  /**
   * categories_recipes delete
   */
  export type categories_recipesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories_recipes
     */
    select?: categories_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories_recipes
     */
    omit?: categories_recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categories_recipesInclude<ExtArgs> | null
    /**
     * Filter which categories_recipes to delete.
     */
    where: categories_recipesWhereUniqueInput
  }

  /**
   * categories_recipes deleteMany
   */
  export type categories_recipesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories_recipes to delete
     */
    where?: categories_recipesWhereInput
    /**
     * Limit how many categories_recipes to delete.
     */
    limit?: number
  }

  /**
   * categories_recipes without action
   */
  export type categories_recipesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories_recipes
     */
    select?: categories_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories_recipes
     */
    omit?: categories_recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categories_recipesInclude<ExtArgs> | null
  }


  /**
   * Model ingredients
   */

  export type AggregateIngredients = {
    _count: IngredientsCountAggregateOutputType | null
    _avg: IngredientsAvgAggregateOutputType | null
    _sum: IngredientsSumAggregateOutputType | null
    _min: IngredientsMinAggregateOutputType | null
    _max: IngredientsMaxAggregateOutputType | null
  }

  export type IngredientsAvgAggregateOutputType = {
    id: number | null
  }

  export type IngredientsSumAggregateOutputType = {
    id: number | null
  }

  export type IngredientsMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type IngredientsMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type IngredientsCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type IngredientsAvgAggregateInputType = {
    id?: true
  }

  export type IngredientsSumAggregateInputType = {
    id?: true
  }

  export type IngredientsMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type IngredientsMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type IngredientsCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type IngredientsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ingredients to aggregate.
     */
    where?: ingredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingredients to fetch.
     */
    orderBy?: ingredientsOrderByWithRelationInput | ingredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ingredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ingredients
    **/
    _count?: true | IngredientsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngredientsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngredientsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredientsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredientsMaxAggregateInputType
  }

  export type GetIngredientsAggregateType<T extends IngredientsAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredients]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredients[P]>
      : GetScalarType<T[P], AggregateIngredients[P]>
  }




  export type ingredientsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ingredientsWhereInput
    orderBy?: ingredientsOrderByWithAggregationInput | ingredientsOrderByWithAggregationInput[]
    by: IngredientsScalarFieldEnum[] | IngredientsScalarFieldEnum
    having?: ingredientsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredientsCountAggregateInputType | true
    _avg?: IngredientsAvgAggregateInputType
    _sum?: IngredientsSumAggregateInputType
    _min?: IngredientsMinAggregateInputType
    _max?: IngredientsMaxAggregateInputType
  }

  export type IngredientsGroupByOutputType = {
    id: number
    name: string
    _count: IngredientsCountAggregateOutputType | null
    _avg: IngredientsAvgAggregateOutputType | null
    _sum: IngredientsSumAggregateOutputType | null
    _min: IngredientsMinAggregateOutputType | null
    _max: IngredientsMaxAggregateOutputType | null
  }

  type GetIngredientsGroupByPayload<T extends ingredientsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredientsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredientsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredientsGroupByOutputType[P]>
            : GetScalarType<T[P], IngredientsGroupByOutputType[P]>
        }
      >
    >


  export type ingredientsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ingredients_recipes?: boolean | ingredients$ingredients_recipesArgs<ExtArgs>
    _count?: boolean | IngredientsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredients"]>

  export type ingredientsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["ingredients"]>

  export type ingredientsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["ingredients"]>

  export type ingredientsSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ingredientsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["ingredients"]>
  export type ingredientsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients_recipes?: boolean | ingredients$ingredients_recipesArgs<ExtArgs>
    _count?: boolean | IngredientsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ingredientsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ingredientsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ingredientsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ingredients"
    objects: {
      ingredients_recipes: Prisma.$ingredients_recipesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["ingredients"]>
    composites: {}
  }

  type ingredientsGetPayload<S extends boolean | null | undefined | ingredientsDefaultArgs> = $Result.GetResult<Prisma.$ingredientsPayload, S>

  type ingredientsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ingredientsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngredientsCountAggregateInputType | true
    }

  export interface ingredientsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ingredients'], meta: { name: 'ingredients' } }
    /**
     * Find zero or one Ingredients that matches the filter.
     * @param {ingredientsFindUniqueArgs} args - Arguments to find a Ingredients
     * @example
     * // Get one Ingredients
     * const ingredients = await prisma.ingredients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ingredientsFindUniqueArgs>(args: SelectSubset<T, ingredientsFindUniqueArgs<ExtArgs>>): Prisma__ingredientsClient<$Result.GetResult<Prisma.$ingredientsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ingredients that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ingredientsFindUniqueOrThrowArgs} args - Arguments to find a Ingredients
     * @example
     * // Get one Ingredients
     * const ingredients = await prisma.ingredients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ingredientsFindUniqueOrThrowArgs>(args: SelectSubset<T, ingredientsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ingredientsClient<$Result.GetResult<Prisma.$ingredientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredientsFindFirstArgs} args - Arguments to find a Ingredients
     * @example
     * // Get one Ingredients
     * const ingredients = await prisma.ingredients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ingredientsFindFirstArgs>(args?: SelectSubset<T, ingredientsFindFirstArgs<ExtArgs>>): Prisma__ingredientsClient<$Result.GetResult<Prisma.$ingredientsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredients that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredientsFindFirstOrThrowArgs} args - Arguments to find a Ingredients
     * @example
     * // Get one Ingredients
     * const ingredients = await prisma.ingredients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ingredientsFindFirstOrThrowArgs>(args?: SelectSubset<T, ingredientsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ingredientsClient<$Result.GetResult<Prisma.$ingredientsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredientsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingredients
     * const ingredients = await prisma.ingredients.findMany()
     * 
     * // Get first 10 Ingredients
     * const ingredients = await prisma.ingredients.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingredientsWithIdOnly = await prisma.ingredients.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ingredientsFindManyArgs>(args?: SelectSubset<T, ingredientsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingredientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ingredients.
     * @param {ingredientsCreateArgs} args - Arguments to create a Ingredients.
     * @example
     * // Create one Ingredients
     * const Ingredients = await prisma.ingredients.create({
     *   data: {
     *     // ... data to create a Ingredients
     *   }
     * })
     * 
     */
    create<T extends ingredientsCreateArgs>(args: SelectSubset<T, ingredientsCreateArgs<ExtArgs>>): Prisma__ingredientsClient<$Result.GetResult<Prisma.$ingredientsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ingredients.
     * @param {ingredientsCreateManyArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredients = await prisma.ingredients.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ingredientsCreateManyArgs>(args?: SelectSubset<T, ingredientsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ingredients and returns the data saved in the database.
     * @param {ingredientsCreateManyAndReturnArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredients = await prisma.ingredients.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ingredients and only return the `id`
     * const ingredientsWithIdOnly = await prisma.ingredients.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ingredientsCreateManyAndReturnArgs>(args?: SelectSubset<T, ingredientsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingredientsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ingredients.
     * @param {ingredientsDeleteArgs} args - Arguments to delete one Ingredients.
     * @example
     * // Delete one Ingredients
     * const Ingredients = await prisma.ingredients.delete({
     *   where: {
     *     // ... filter to delete one Ingredients
     *   }
     * })
     * 
     */
    delete<T extends ingredientsDeleteArgs>(args: SelectSubset<T, ingredientsDeleteArgs<ExtArgs>>): Prisma__ingredientsClient<$Result.GetResult<Prisma.$ingredientsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ingredients.
     * @param {ingredientsUpdateArgs} args - Arguments to update one Ingredients.
     * @example
     * // Update one Ingredients
     * const ingredients = await prisma.ingredients.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ingredientsUpdateArgs>(args: SelectSubset<T, ingredientsUpdateArgs<ExtArgs>>): Prisma__ingredientsClient<$Result.GetResult<Prisma.$ingredientsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ingredients.
     * @param {ingredientsDeleteManyArgs} args - Arguments to filter Ingredients to delete.
     * @example
     * // Delete a few Ingredients
     * const { count } = await prisma.ingredients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ingredientsDeleteManyArgs>(args?: SelectSubset<T, ingredientsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredientsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingredients
     * const ingredients = await prisma.ingredients.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ingredientsUpdateManyArgs>(args: SelectSubset<T, ingredientsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients and returns the data updated in the database.
     * @param {ingredientsUpdateManyAndReturnArgs} args - Arguments to update many Ingredients.
     * @example
     * // Update many Ingredients
     * const ingredients = await prisma.ingredients.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ingredients and only return the `id`
     * const ingredientsWithIdOnly = await prisma.ingredients.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ingredientsUpdateManyAndReturnArgs>(args: SelectSubset<T, ingredientsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingredientsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ingredients.
     * @param {ingredientsUpsertArgs} args - Arguments to update or create a Ingredients.
     * @example
     * // Update or create a Ingredients
     * const ingredients = await prisma.ingredients.upsert({
     *   create: {
     *     // ... data to create a Ingredients
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingredients we want to update
     *   }
     * })
     */
    upsert<T extends ingredientsUpsertArgs>(args: SelectSubset<T, ingredientsUpsertArgs<ExtArgs>>): Prisma__ingredientsClient<$Result.GetResult<Prisma.$ingredientsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredientsCountArgs} args - Arguments to filter Ingredients to count.
     * @example
     * // Count the number of Ingredients
     * const count = await prisma.ingredients.count({
     *   where: {
     *     // ... the filter for the Ingredients we want to count
     *   }
     * })
    **/
    count<T extends ingredientsCountArgs>(
      args?: Subset<T, ingredientsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredientsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IngredientsAggregateArgs>(args: Subset<T, IngredientsAggregateArgs>): Prisma.PrismaPromise<GetIngredientsAggregateType<T>>

    /**
     * Group by Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredientsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ingredientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ingredientsGroupByArgs['orderBy'] }
        : { orderBy?: ingredientsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ingredientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ingredients model
   */
  readonly fields: ingredientsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ingredients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ingredientsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingredients_recipes<T extends ingredients$ingredients_recipesArgs<ExtArgs> = {}>(args?: Subset<T, ingredients$ingredients_recipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingredients_recipesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ingredients model
   */
  interface ingredientsFieldRefs {
    readonly id: FieldRef<"ingredients", 'Int'>
    readonly name: FieldRef<"ingredients", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ingredients findUnique
   */
  export type ingredientsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredients
     */
    select?: ingredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredients
     */
    omit?: ingredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientsInclude<ExtArgs> | null
    /**
     * Filter, which ingredients to fetch.
     */
    where: ingredientsWhereUniqueInput
  }

  /**
   * ingredients findUniqueOrThrow
   */
  export type ingredientsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredients
     */
    select?: ingredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredients
     */
    omit?: ingredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientsInclude<ExtArgs> | null
    /**
     * Filter, which ingredients to fetch.
     */
    where: ingredientsWhereUniqueInput
  }

  /**
   * ingredients findFirst
   */
  export type ingredientsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredients
     */
    select?: ingredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredients
     */
    omit?: ingredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientsInclude<ExtArgs> | null
    /**
     * Filter, which ingredients to fetch.
     */
    where?: ingredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingredients to fetch.
     */
    orderBy?: ingredientsOrderByWithRelationInput | ingredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ingredients.
     */
    cursor?: ingredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ingredients.
     */
    distinct?: IngredientsScalarFieldEnum | IngredientsScalarFieldEnum[]
  }

  /**
   * ingredients findFirstOrThrow
   */
  export type ingredientsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredients
     */
    select?: ingredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredients
     */
    omit?: ingredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientsInclude<ExtArgs> | null
    /**
     * Filter, which ingredients to fetch.
     */
    where?: ingredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingredients to fetch.
     */
    orderBy?: ingredientsOrderByWithRelationInput | ingredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ingredients.
     */
    cursor?: ingredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ingredients.
     */
    distinct?: IngredientsScalarFieldEnum | IngredientsScalarFieldEnum[]
  }

  /**
   * ingredients findMany
   */
  export type ingredientsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredients
     */
    select?: ingredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredients
     */
    omit?: ingredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientsInclude<ExtArgs> | null
    /**
     * Filter, which ingredients to fetch.
     */
    where?: ingredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingredients to fetch.
     */
    orderBy?: ingredientsOrderByWithRelationInput | ingredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ingredients.
     */
    cursor?: ingredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingredients.
     */
    skip?: number
    distinct?: IngredientsScalarFieldEnum | IngredientsScalarFieldEnum[]
  }

  /**
   * ingredients create
   */
  export type ingredientsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredients
     */
    select?: ingredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredients
     */
    omit?: ingredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientsInclude<ExtArgs> | null
    /**
     * The data needed to create a ingredients.
     */
    data: XOR<ingredientsCreateInput, ingredientsUncheckedCreateInput>
  }

  /**
   * ingredients createMany
   */
  export type ingredientsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ingredients.
     */
    data: ingredientsCreateManyInput | ingredientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ingredients createManyAndReturn
   */
  export type ingredientsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredients
     */
    select?: ingredientsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ingredients
     */
    omit?: ingredientsOmit<ExtArgs> | null
    /**
     * The data used to create many ingredients.
     */
    data: ingredientsCreateManyInput | ingredientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ingredients update
   */
  export type ingredientsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredients
     */
    select?: ingredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredients
     */
    omit?: ingredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientsInclude<ExtArgs> | null
    /**
     * The data needed to update a ingredients.
     */
    data: XOR<ingredientsUpdateInput, ingredientsUncheckedUpdateInput>
    /**
     * Choose, which ingredients to update.
     */
    where: ingredientsWhereUniqueInput
  }

  /**
   * ingredients updateMany
   */
  export type ingredientsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ingredients.
     */
    data: XOR<ingredientsUpdateManyMutationInput, ingredientsUncheckedUpdateManyInput>
    /**
     * Filter which ingredients to update
     */
    where?: ingredientsWhereInput
    /**
     * Limit how many ingredients to update.
     */
    limit?: number
  }

  /**
   * ingredients updateManyAndReturn
   */
  export type ingredientsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredients
     */
    select?: ingredientsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ingredients
     */
    omit?: ingredientsOmit<ExtArgs> | null
    /**
     * The data used to update ingredients.
     */
    data: XOR<ingredientsUpdateManyMutationInput, ingredientsUncheckedUpdateManyInput>
    /**
     * Filter which ingredients to update
     */
    where?: ingredientsWhereInput
    /**
     * Limit how many ingredients to update.
     */
    limit?: number
  }

  /**
   * ingredients upsert
   */
  export type ingredientsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredients
     */
    select?: ingredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredients
     */
    omit?: ingredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientsInclude<ExtArgs> | null
    /**
     * The filter to search for the ingredients to update in case it exists.
     */
    where: ingredientsWhereUniqueInput
    /**
     * In case the ingredients found by the `where` argument doesn't exist, create a new ingredients with this data.
     */
    create: XOR<ingredientsCreateInput, ingredientsUncheckedCreateInput>
    /**
     * In case the ingredients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ingredientsUpdateInput, ingredientsUncheckedUpdateInput>
  }

  /**
   * ingredients delete
   */
  export type ingredientsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredients
     */
    select?: ingredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredients
     */
    omit?: ingredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientsInclude<ExtArgs> | null
    /**
     * Filter which ingredients to delete.
     */
    where: ingredientsWhereUniqueInput
  }

  /**
   * ingredients deleteMany
   */
  export type ingredientsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ingredients to delete
     */
    where?: ingredientsWhereInput
    /**
     * Limit how many ingredients to delete.
     */
    limit?: number
  }

  /**
   * ingredients.ingredients_recipes
   */
  export type ingredients$ingredients_recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredients_recipes
     */
    select?: ingredients_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredients_recipes
     */
    omit?: ingredients_recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredients_recipesInclude<ExtArgs> | null
    where?: ingredients_recipesWhereInput
    orderBy?: ingredients_recipesOrderByWithRelationInput | ingredients_recipesOrderByWithRelationInput[]
    cursor?: ingredients_recipesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Ingredients_recipesScalarFieldEnum | Ingredients_recipesScalarFieldEnum[]
  }

  /**
   * ingredients without action
   */
  export type ingredientsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredients
     */
    select?: ingredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredients
     */
    omit?: ingredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientsInclude<ExtArgs> | null
  }


  /**
   * Model ingredients_recipes
   */

  export type AggregateIngredients_recipes = {
    _count: Ingredients_recipesCountAggregateOutputType | null
    _avg: Ingredients_recipesAvgAggregateOutputType | null
    _sum: Ingredients_recipesSumAggregateOutputType | null
    _min: Ingredients_recipesMinAggregateOutputType | null
    _max: Ingredients_recipesMaxAggregateOutputType | null
  }

  export type Ingredients_recipesAvgAggregateOutputType = {
    id: number | null
    ingredient_id: number | null
    recipe_id: number | null
  }

  export type Ingredients_recipesSumAggregateOutputType = {
    id: number | null
    ingredient_id: number | null
    recipe_id: number | null
  }

  export type Ingredients_recipesMinAggregateOutputType = {
    id: number | null
    ingredient_id: number | null
    recipe_id: number | null
    full_text: string | null
  }

  export type Ingredients_recipesMaxAggregateOutputType = {
    id: number | null
    ingredient_id: number | null
    recipe_id: number | null
    full_text: string | null
  }

  export type Ingredients_recipesCountAggregateOutputType = {
    id: number
    ingredient_id: number
    recipe_id: number
    full_text: number
    _all: number
  }


  export type Ingredients_recipesAvgAggregateInputType = {
    id?: true
    ingredient_id?: true
    recipe_id?: true
  }

  export type Ingredients_recipesSumAggregateInputType = {
    id?: true
    ingredient_id?: true
    recipe_id?: true
  }

  export type Ingredients_recipesMinAggregateInputType = {
    id?: true
    ingredient_id?: true
    recipe_id?: true
    full_text?: true
  }

  export type Ingredients_recipesMaxAggregateInputType = {
    id?: true
    ingredient_id?: true
    recipe_id?: true
    full_text?: true
  }

  export type Ingredients_recipesCountAggregateInputType = {
    id?: true
    ingredient_id?: true
    recipe_id?: true
    full_text?: true
    _all?: true
  }

  export type Ingredients_recipesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ingredients_recipes to aggregate.
     */
    where?: ingredients_recipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingredients_recipes to fetch.
     */
    orderBy?: ingredients_recipesOrderByWithRelationInput | ingredients_recipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ingredients_recipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingredients_recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingredients_recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ingredients_recipes
    **/
    _count?: true | Ingredients_recipesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ingredients_recipesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ingredients_recipesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ingredients_recipesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ingredients_recipesMaxAggregateInputType
  }

  export type GetIngredients_recipesAggregateType<T extends Ingredients_recipesAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredients_recipes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredients_recipes[P]>
      : GetScalarType<T[P], AggregateIngredients_recipes[P]>
  }




  export type ingredients_recipesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ingredients_recipesWhereInput
    orderBy?: ingredients_recipesOrderByWithAggregationInput | ingredients_recipesOrderByWithAggregationInput[]
    by: Ingredients_recipesScalarFieldEnum[] | Ingredients_recipesScalarFieldEnum
    having?: ingredients_recipesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ingredients_recipesCountAggregateInputType | true
    _avg?: Ingredients_recipesAvgAggregateInputType
    _sum?: Ingredients_recipesSumAggregateInputType
    _min?: Ingredients_recipesMinAggregateInputType
    _max?: Ingredients_recipesMaxAggregateInputType
  }

  export type Ingredients_recipesGroupByOutputType = {
    id: number
    ingredient_id: number
    recipe_id: number
    full_text: string | null
    _count: Ingredients_recipesCountAggregateOutputType | null
    _avg: Ingredients_recipesAvgAggregateOutputType | null
    _sum: Ingredients_recipesSumAggregateOutputType | null
    _min: Ingredients_recipesMinAggregateOutputType | null
    _max: Ingredients_recipesMaxAggregateOutputType | null
  }

  type GetIngredients_recipesGroupByPayload<T extends ingredients_recipesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ingredients_recipesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ingredients_recipesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ingredients_recipesGroupByOutputType[P]>
            : GetScalarType<T[P], Ingredients_recipesGroupByOutputType[P]>
        }
      >
    >


  export type ingredients_recipesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ingredient_id?: boolean
    recipe_id?: boolean
    full_text?: boolean
    ingredients?: boolean | ingredientsDefaultArgs<ExtArgs>
    recipes?: boolean | recipesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredients_recipes"]>

  export type ingredients_recipesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ingredient_id?: boolean
    recipe_id?: boolean
    full_text?: boolean
    ingredients?: boolean | ingredientsDefaultArgs<ExtArgs>
    recipes?: boolean | recipesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredients_recipes"]>

  export type ingredients_recipesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ingredient_id?: boolean
    recipe_id?: boolean
    full_text?: boolean
    ingredients?: boolean | ingredientsDefaultArgs<ExtArgs>
    recipes?: boolean | recipesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredients_recipes"]>

  export type ingredients_recipesSelectScalar = {
    id?: boolean
    ingredient_id?: boolean
    recipe_id?: boolean
    full_text?: boolean
  }

  export type ingredients_recipesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ingredient_id" | "recipe_id" | "full_text", ExtArgs["result"]["ingredients_recipes"]>
  export type ingredients_recipesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | ingredientsDefaultArgs<ExtArgs>
    recipes?: boolean | recipesDefaultArgs<ExtArgs>
  }
  export type ingredients_recipesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | ingredientsDefaultArgs<ExtArgs>
    recipes?: boolean | recipesDefaultArgs<ExtArgs>
  }
  export type ingredients_recipesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | ingredientsDefaultArgs<ExtArgs>
    recipes?: boolean | recipesDefaultArgs<ExtArgs>
  }

  export type $ingredients_recipesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ingredients_recipes"
    objects: {
      ingredients: Prisma.$ingredientsPayload<ExtArgs>
      recipes: Prisma.$recipesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ingredient_id: number
      recipe_id: number
      full_text: string | null
    }, ExtArgs["result"]["ingredients_recipes"]>
    composites: {}
  }

  type ingredients_recipesGetPayload<S extends boolean | null | undefined | ingredients_recipesDefaultArgs> = $Result.GetResult<Prisma.$ingredients_recipesPayload, S>

  type ingredients_recipesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ingredients_recipesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Ingredients_recipesCountAggregateInputType | true
    }

  export interface ingredients_recipesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ingredients_recipes'], meta: { name: 'ingredients_recipes' } }
    /**
     * Find zero or one Ingredients_recipes that matches the filter.
     * @param {ingredients_recipesFindUniqueArgs} args - Arguments to find a Ingredients_recipes
     * @example
     * // Get one Ingredients_recipes
     * const ingredients_recipes = await prisma.ingredients_recipes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ingredients_recipesFindUniqueArgs>(args: SelectSubset<T, ingredients_recipesFindUniqueArgs<ExtArgs>>): Prisma__ingredients_recipesClient<$Result.GetResult<Prisma.$ingredients_recipesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ingredients_recipes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ingredients_recipesFindUniqueOrThrowArgs} args - Arguments to find a Ingredients_recipes
     * @example
     * // Get one Ingredients_recipes
     * const ingredients_recipes = await prisma.ingredients_recipes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ingredients_recipesFindUniqueOrThrowArgs>(args: SelectSubset<T, ingredients_recipesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ingredients_recipesClient<$Result.GetResult<Prisma.$ingredients_recipesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredients_recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredients_recipesFindFirstArgs} args - Arguments to find a Ingredients_recipes
     * @example
     * // Get one Ingredients_recipes
     * const ingredients_recipes = await prisma.ingredients_recipes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ingredients_recipesFindFirstArgs>(args?: SelectSubset<T, ingredients_recipesFindFirstArgs<ExtArgs>>): Prisma__ingredients_recipesClient<$Result.GetResult<Prisma.$ingredients_recipesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredients_recipes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredients_recipesFindFirstOrThrowArgs} args - Arguments to find a Ingredients_recipes
     * @example
     * // Get one Ingredients_recipes
     * const ingredients_recipes = await prisma.ingredients_recipes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ingredients_recipesFindFirstOrThrowArgs>(args?: SelectSubset<T, ingredients_recipesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ingredients_recipesClient<$Result.GetResult<Prisma.$ingredients_recipesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ingredients_recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredients_recipesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingredients_recipes
     * const ingredients_recipes = await prisma.ingredients_recipes.findMany()
     * 
     * // Get first 10 Ingredients_recipes
     * const ingredients_recipes = await prisma.ingredients_recipes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingredients_recipesWithIdOnly = await prisma.ingredients_recipes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ingredients_recipesFindManyArgs>(args?: SelectSubset<T, ingredients_recipesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingredients_recipesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ingredients_recipes.
     * @param {ingredients_recipesCreateArgs} args - Arguments to create a Ingredients_recipes.
     * @example
     * // Create one Ingredients_recipes
     * const Ingredients_recipes = await prisma.ingredients_recipes.create({
     *   data: {
     *     // ... data to create a Ingredients_recipes
     *   }
     * })
     * 
     */
    create<T extends ingredients_recipesCreateArgs>(args: SelectSubset<T, ingredients_recipesCreateArgs<ExtArgs>>): Prisma__ingredients_recipesClient<$Result.GetResult<Prisma.$ingredients_recipesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ingredients_recipes.
     * @param {ingredients_recipesCreateManyArgs} args - Arguments to create many Ingredients_recipes.
     * @example
     * // Create many Ingredients_recipes
     * const ingredients_recipes = await prisma.ingredients_recipes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ingredients_recipesCreateManyArgs>(args?: SelectSubset<T, ingredients_recipesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ingredients_recipes and returns the data saved in the database.
     * @param {ingredients_recipesCreateManyAndReturnArgs} args - Arguments to create many Ingredients_recipes.
     * @example
     * // Create many Ingredients_recipes
     * const ingredients_recipes = await prisma.ingredients_recipes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ingredients_recipes and only return the `id`
     * const ingredients_recipesWithIdOnly = await prisma.ingredients_recipes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ingredients_recipesCreateManyAndReturnArgs>(args?: SelectSubset<T, ingredients_recipesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingredients_recipesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ingredients_recipes.
     * @param {ingredients_recipesDeleteArgs} args - Arguments to delete one Ingredients_recipes.
     * @example
     * // Delete one Ingredients_recipes
     * const Ingredients_recipes = await prisma.ingredients_recipes.delete({
     *   where: {
     *     // ... filter to delete one Ingredients_recipes
     *   }
     * })
     * 
     */
    delete<T extends ingredients_recipesDeleteArgs>(args: SelectSubset<T, ingredients_recipesDeleteArgs<ExtArgs>>): Prisma__ingredients_recipesClient<$Result.GetResult<Prisma.$ingredients_recipesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ingredients_recipes.
     * @param {ingredients_recipesUpdateArgs} args - Arguments to update one Ingredients_recipes.
     * @example
     * // Update one Ingredients_recipes
     * const ingredients_recipes = await prisma.ingredients_recipes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ingredients_recipesUpdateArgs>(args: SelectSubset<T, ingredients_recipesUpdateArgs<ExtArgs>>): Prisma__ingredients_recipesClient<$Result.GetResult<Prisma.$ingredients_recipesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ingredients_recipes.
     * @param {ingredients_recipesDeleteManyArgs} args - Arguments to filter Ingredients_recipes to delete.
     * @example
     * // Delete a few Ingredients_recipes
     * const { count } = await prisma.ingredients_recipes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ingredients_recipesDeleteManyArgs>(args?: SelectSubset<T, ingredients_recipesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients_recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredients_recipesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingredients_recipes
     * const ingredients_recipes = await prisma.ingredients_recipes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ingredients_recipesUpdateManyArgs>(args: SelectSubset<T, ingredients_recipesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients_recipes and returns the data updated in the database.
     * @param {ingredients_recipesUpdateManyAndReturnArgs} args - Arguments to update many Ingredients_recipes.
     * @example
     * // Update many Ingredients_recipes
     * const ingredients_recipes = await prisma.ingredients_recipes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ingredients_recipes and only return the `id`
     * const ingredients_recipesWithIdOnly = await prisma.ingredients_recipes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ingredients_recipesUpdateManyAndReturnArgs>(args: SelectSubset<T, ingredients_recipesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingredients_recipesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ingredients_recipes.
     * @param {ingredients_recipesUpsertArgs} args - Arguments to update or create a Ingredients_recipes.
     * @example
     * // Update or create a Ingredients_recipes
     * const ingredients_recipes = await prisma.ingredients_recipes.upsert({
     *   create: {
     *     // ... data to create a Ingredients_recipes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingredients_recipes we want to update
     *   }
     * })
     */
    upsert<T extends ingredients_recipesUpsertArgs>(args: SelectSubset<T, ingredients_recipesUpsertArgs<ExtArgs>>): Prisma__ingredients_recipesClient<$Result.GetResult<Prisma.$ingredients_recipesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ingredients_recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredients_recipesCountArgs} args - Arguments to filter Ingredients_recipes to count.
     * @example
     * // Count the number of Ingredients_recipes
     * const count = await prisma.ingredients_recipes.count({
     *   where: {
     *     // ... the filter for the Ingredients_recipes we want to count
     *   }
     * })
    **/
    count<T extends ingredients_recipesCountArgs>(
      args?: Subset<T, ingredients_recipesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ingredients_recipesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingredients_recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ingredients_recipesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ingredients_recipesAggregateArgs>(args: Subset<T, Ingredients_recipesAggregateArgs>): Prisma.PrismaPromise<GetIngredients_recipesAggregateType<T>>

    /**
     * Group by Ingredients_recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredients_recipesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ingredients_recipesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ingredients_recipesGroupByArgs['orderBy'] }
        : { orderBy?: ingredients_recipesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ingredients_recipesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredients_recipesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ingredients_recipes model
   */
  readonly fields: ingredients_recipesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ingredients_recipes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ingredients_recipesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingredients<T extends ingredientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ingredientsDefaultArgs<ExtArgs>>): Prisma__ingredientsClient<$Result.GetResult<Prisma.$ingredientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recipes<T extends recipesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, recipesDefaultArgs<ExtArgs>>): Prisma__recipesClient<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ingredients_recipes model
   */
  interface ingredients_recipesFieldRefs {
    readonly id: FieldRef<"ingredients_recipes", 'Int'>
    readonly ingredient_id: FieldRef<"ingredients_recipes", 'Int'>
    readonly recipe_id: FieldRef<"ingredients_recipes", 'Int'>
    readonly full_text: FieldRef<"ingredients_recipes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ingredients_recipes findUnique
   */
  export type ingredients_recipesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredients_recipes
     */
    select?: ingredients_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredients_recipes
     */
    omit?: ingredients_recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredients_recipesInclude<ExtArgs> | null
    /**
     * Filter, which ingredients_recipes to fetch.
     */
    where: ingredients_recipesWhereUniqueInput
  }

  /**
   * ingredients_recipes findUniqueOrThrow
   */
  export type ingredients_recipesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredients_recipes
     */
    select?: ingredients_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredients_recipes
     */
    omit?: ingredients_recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredients_recipesInclude<ExtArgs> | null
    /**
     * Filter, which ingredients_recipes to fetch.
     */
    where: ingredients_recipesWhereUniqueInput
  }

  /**
   * ingredients_recipes findFirst
   */
  export type ingredients_recipesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredients_recipes
     */
    select?: ingredients_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredients_recipes
     */
    omit?: ingredients_recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredients_recipesInclude<ExtArgs> | null
    /**
     * Filter, which ingredients_recipes to fetch.
     */
    where?: ingredients_recipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingredients_recipes to fetch.
     */
    orderBy?: ingredients_recipesOrderByWithRelationInput | ingredients_recipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ingredients_recipes.
     */
    cursor?: ingredients_recipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingredients_recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingredients_recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ingredients_recipes.
     */
    distinct?: Ingredients_recipesScalarFieldEnum | Ingredients_recipesScalarFieldEnum[]
  }

  /**
   * ingredients_recipes findFirstOrThrow
   */
  export type ingredients_recipesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredients_recipes
     */
    select?: ingredients_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredients_recipes
     */
    omit?: ingredients_recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredients_recipesInclude<ExtArgs> | null
    /**
     * Filter, which ingredients_recipes to fetch.
     */
    where?: ingredients_recipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingredients_recipes to fetch.
     */
    orderBy?: ingredients_recipesOrderByWithRelationInput | ingredients_recipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ingredients_recipes.
     */
    cursor?: ingredients_recipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingredients_recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingredients_recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ingredients_recipes.
     */
    distinct?: Ingredients_recipesScalarFieldEnum | Ingredients_recipesScalarFieldEnum[]
  }

  /**
   * ingredients_recipes findMany
   */
  export type ingredients_recipesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredients_recipes
     */
    select?: ingredients_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredients_recipes
     */
    omit?: ingredients_recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredients_recipesInclude<ExtArgs> | null
    /**
     * Filter, which ingredients_recipes to fetch.
     */
    where?: ingredients_recipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingredients_recipes to fetch.
     */
    orderBy?: ingredients_recipesOrderByWithRelationInput | ingredients_recipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ingredients_recipes.
     */
    cursor?: ingredients_recipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingredients_recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingredients_recipes.
     */
    skip?: number
    distinct?: Ingredients_recipesScalarFieldEnum | Ingredients_recipesScalarFieldEnum[]
  }

  /**
   * ingredients_recipes create
   */
  export type ingredients_recipesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredients_recipes
     */
    select?: ingredients_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredients_recipes
     */
    omit?: ingredients_recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredients_recipesInclude<ExtArgs> | null
    /**
     * The data needed to create a ingredients_recipes.
     */
    data: XOR<ingredients_recipesCreateInput, ingredients_recipesUncheckedCreateInput>
  }

  /**
   * ingredients_recipes createMany
   */
  export type ingredients_recipesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ingredients_recipes.
     */
    data: ingredients_recipesCreateManyInput | ingredients_recipesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ingredients_recipes createManyAndReturn
   */
  export type ingredients_recipesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredients_recipes
     */
    select?: ingredients_recipesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ingredients_recipes
     */
    omit?: ingredients_recipesOmit<ExtArgs> | null
    /**
     * The data used to create many ingredients_recipes.
     */
    data: ingredients_recipesCreateManyInput | ingredients_recipesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredients_recipesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ingredients_recipes update
   */
  export type ingredients_recipesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredients_recipes
     */
    select?: ingredients_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredients_recipes
     */
    omit?: ingredients_recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredients_recipesInclude<ExtArgs> | null
    /**
     * The data needed to update a ingredients_recipes.
     */
    data: XOR<ingredients_recipesUpdateInput, ingredients_recipesUncheckedUpdateInput>
    /**
     * Choose, which ingredients_recipes to update.
     */
    where: ingredients_recipesWhereUniqueInput
  }

  /**
   * ingredients_recipes updateMany
   */
  export type ingredients_recipesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ingredients_recipes.
     */
    data: XOR<ingredients_recipesUpdateManyMutationInput, ingredients_recipesUncheckedUpdateManyInput>
    /**
     * Filter which ingredients_recipes to update
     */
    where?: ingredients_recipesWhereInput
    /**
     * Limit how many ingredients_recipes to update.
     */
    limit?: number
  }

  /**
   * ingredients_recipes updateManyAndReturn
   */
  export type ingredients_recipesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredients_recipes
     */
    select?: ingredients_recipesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ingredients_recipes
     */
    omit?: ingredients_recipesOmit<ExtArgs> | null
    /**
     * The data used to update ingredients_recipes.
     */
    data: XOR<ingredients_recipesUpdateManyMutationInput, ingredients_recipesUncheckedUpdateManyInput>
    /**
     * Filter which ingredients_recipes to update
     */
    where?: ingredients_recipesWhereInput
    /**
     * Limit how many ingredients_recipes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredients_recipesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ingredients_recipes upsert
   */
  export type ingredients_recipesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredients_recipes
     */
    select?: ingredients_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredients_recipes
     */
    omit?: ingredients_recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredients_recipesInclude<ExtArgs> | null
    /**
     * The filter to search for the ingredients_recipes to update in case it exists.
     */
    where: ingredients_recipesWhereUniqueInput
    /**
     * In case the ingredients_recipes found by the `where` argument doesn't exist, create a new ingredients_recipes with this data.
     */
    create: XOR<ingredients_recipesCreateInput, ingredients_recipesUncheckedCreateInput>
    /**
     * In case the ingredients_recipes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ingredients_recipesUpdateInput, ingredients_recipesUncheckedUpdateInput>
  }

  /**
   * ingredients_recipes delete
   */
  export type ingredients_recipesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredients_recipes
     */
    select?: ingredients_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredients_recipes
     */
    omit?: ingredients_recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredients_recipesInclude<ExtArgs> | null
    /**
     * Filter which ingredients_recipes to delete.
     */
    where: ingredients_recipesWhereUniqueInput
  }

  /**
   * ingredients_recipes deleteMany
   */
  export type ingredients_recipesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ingredients_recipes to delete
     */
    where?: ingredients_recipesWhereInput
    /**
     * Limit how many ingredients_recipes to delete.
     */
    limit?: number
  }

  /**
   * ingredients_recipes without action
   */
  export type ingredients_recipesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredients_recipes
     */
    select?: ingredients_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredients_recipes
     */
    omit?: ingredients_recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredients_recipesInclude<ExtArgs> | null
  }


  /**
   * Model not_recipes
   */

  export type AggregateNot_recipes = {
    _count: Not_recipesCountAggregateOutputType | null
    _avg: Not_recipesAvgAggregateOutputType | null
    _sum: Not_recipesSumAggregateOutputType | null
    _min: Not_recipesMinAggregateOutputType | null
    _max: Not_recipesMaxAggregateOutputType | null
  }

  export type Not_recipesAvgAggregateOutputType = {
    id: number | null
  }

  export type Not_recipesSumAggregateOutputType = {
    id: number | null
  }

  export type Not_recipesMinAggregateOutputType = {
    id: number | null
    url: string | null
  }

  export type Not_recipesMaxAggregateOutputType = {
    id: number | null
    url: string | null
  }

  export type Not_recipesCountAggregateOutputType = {
    id: number
    url: number
    _all: number
  }


  export type Not_recipesAvgAggregateInputType = {
    id?: true
  }

  export type Not_recipesSumAggregateInputType = {
    id?: true
  }

  export type Not_recipesMinAggregateInputType = {
    id?: true
    url?: true
  }

  export type Not_recipesMaxAggregateInputType = {
    id?: true
    url?: true
  }

  export type Not_recipesCountAggregateInputType = {
    id?: true
    url?: true
    _all?: true
  }

  export type Not_recipesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which not_recipes to aggregate.
     */
    where?: not_recipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of not_recipes to fetch.
     */
    orderBy?: not_recipesOrderByWithRelationInput | not_recipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: not_recipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` not_recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` not_recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned not_recipes
    **/
    _count?: true | Not_recipesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Not_recipesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Not_recipesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Not_recipesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Not_recipesMaxAggregateInputType
  }

  export type GetNot_recipesAggregateType<T extends Not_recipesAggregateArgs> = {
        [P in keyof T & keyof AggregateNot_recipes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNot_recipes[P]>
      : GetScalarType<T[P], AggregateNot_recipes[P]>
  }




  export type not_recipesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: not_recipesWhereInput
    orderBy?: not_recipesOrderByWithAggregationInput | not_recipesOrderByWithAggregationInput[]
    by: Not_recipesScalarFieldEnum[] | Not_recipesScalarFieldEnum
    having?: not_recipesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Not_recipesCountAggregateInputType | true
    _avg?: Not_recipesAvgAggregateInputType
    _sum?: Not_recipesSumAggregateInputType
    _min?: Not_recipesMinAggregateInputType
    _max?: Not_recipesMaxAggregateInputType
  }

  export type Not_recipesGroupByOutputType = {
    id: number
    url: string
    _count: Not_recipesCountAggregateOutputType | null
    _avg: Not_recipesAvgAggregateOutputType | null
    _sum: Not_recipesSumAggregateOutputType | null
    _min: Not_recipesMinAggregateOutputType | null
    _max: Not_recipesMaxAggregateOutputType | null
  }

  type GetNot_recipesGroupByPayload<T extends not_recipesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Not_recipesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Not_recipesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Not_recipesGroupByOutputType[P]>
            : GetScalarType<T[P], Not_recipesGroupByOutputType[P]>
        }
      >
    >


  export type not_recipesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
  }, ExtArgs["result"]["not_recipes"]>

  export type not_recipesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
  }, ExtArgs["result"]["not_recipes"]>

  export type not_recipesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
  }, ExtArgs["result"]["not_recipes"]>

  export type not_recipesSelectScalar = {
    id?: boolean
    url?: boolean
  }

  export type not_recipesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url", ExtArgs["result"]["not_recipes"]>

  export type $not_recipesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "not_recipes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
    }, ExtArgs["result"]["not_recipes"]>
    composites: {}
  }

  type not_recipesGetPayload<S extends boolean | null | undefined | not_recipesDefaultArgs> = $Result.GetResult<Prisma.$not_recipesPayload, S>

  type not_recipesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<not_recipesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Not_recipesCountAggregateInputType | true
    }

  export interface not_recipesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['not_recipes'], meta: { name: 'not_recipes' } }
    /**
     * Find zero or one Not_recipes that matches the filter.
     * @param {not_recipesFindUniqueArgs} args - Arguments to find a Not_recipes
     * @example
     * // Get one Not_recipes
     * const not_recipes = await prisma.not_recipes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends not_recipesFindUniqueArgs>(args: SelectSubset<T, not_recipesFindUniqueArgs<ExtArgs>>): Prisma__not_recipesClient<$Result.GetResult<Prisma.$not_recipesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Not_recipes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {not_recipesFindUniqueOrThrowArgs} args - Arguments to find a Not_recipes
     * @example
     * // Get one Not_recipes
     * const not_recipes = await prisma.not_recipes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends not_recipesFindUniqueOrThrowArgs>(args: SelectSubset<T, not_recipesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__not_recipesClient<$Result.GetResult<Prisma.$not_recipesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Not_recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {not_recipesFindFirstArgs} args - Arguments to find a Not_recipes
     * @example
     * // Get one Not_recipes
     * const not_recipes = await prisma.not_recipes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends not_recipesFindFirstArgs>(args?: SelectSubset<T, not_recipesFindFirstArgs<ExtArgs>>): Prisma__not_recipesClient<$Result.GetResult<Prisma.$not_recipesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Not_recipes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {not_recipesFindFirstOrThrowArgs} args - Arguments to find a Not_recipes
     * @example
     * // Get one Not_recipes
     * const not_recipes = await prisma.not_recipes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends not_recipesFindFirstOrThrowArgs>(args?: SelectSubset<T, not_recipesFindFirstOrThrowArgs<ExtArgs>>): Prisma__not_recipesClient<$Result.GetResult<Prisma.$not_recipesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Not_recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {not_recipesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Not_recipes
     * const not_recipes = await prisma.not_recipes.findMany()
     * 
     * // Get first 10 Not_recipes
     * const not_recipes = await prisma.not_recipes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const not_recipesWithIdOnly = await prisma.not_recipes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends not_recipesFindManyArgs>(args?: SelectSubset<T, not_recipesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$not_recipesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Not_recipes.
     * @param {not_recipesCreateArgs} args - Arguments to create a Not_recipes.
     * @example
     * // Create one Not_recipes
     * const Not_recipes = await prisma.not_recipes.create({
     *   data: {
     *     // ... data to create a Not_recipes
     *   }
     * })
     * 
     */
    create<T extends not_recipesCreateArgs>(args: SelectSubset<T, not_recipesCreateArgs<ExtArgs>>): Prisma__not_recipesClient<$Result.GetResult<Prisma.$not_recipesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Not_recipes.
     * @param {not_recipesCreateManyArgs} args - Arguments to create many Not_recipes.
     * @example
     * // Create many Not_recipes
     * const not_recipes = await prisma.not_recipes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends not_recipesCreateManyArgs>(args?: SelectSubset<T, not_recipesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Not_recipes and returns the data saved in the database.
     * @param {not_recipesCreateManyAndReturnArgs} args - Arguments to create many Not_recipes.
     * @example
     * // Create many Not_recipes
     * const not_recipes = await prisma.not_recipes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Not_recipes and only return the `id`
     * const not_recipesWithIdOnly = await prisma.not_recipes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends not_recipesCreateManyAndReturnArgs>(args?: SelectSubset<T, not_recipesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$not_recipesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Not_recipes.
     * @param {not_recipesDeleteArgs} args - Arguments to delete one Not_recipes.
     * @example
     * // Delete one Not_recipes
     * const Not_recipes = await prisma.not_recipes.delete({
     *   where: {
     *     // ... filter to delete one Not_recipes
     *   }
     * })
     * 
     */
    delete<T extends not_recipesDeleteArgs>(args: SelectSubset<T, not_recipesDeleteArgs<ExtArgs>>): Prisma__not_recipesClient<$Result.GetResult<Prisma.$not_recipesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Not_recipes.
     * @param {not_recipesUpdateArgs} args - Arguments to update one Not_recipes.
     * @example
     * // Update one Not_recipes
     * const not_recipes = await prisma.not_recipes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends not_recipesUpdateArgs>(args: SelectSubset<T, not_recipesUpdateArgs<ExtArgs>>): Prisma__not_recipesClient<$Result.GetResult<Prisma.$not_recipesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Not_recipes.
     * @param {not_recipesDeleteManyArgs} args - Arguments to filter Not_recipes to delete.
     * @example
     * // Delete a few Not_recipes
     * const { count } = await prisma.not_recipes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends not_recipesDeleteManyArgs>(args?: SelectSubset<T, not_recipesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Not_recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {not_recipesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Not_recipes
     * const not_recipes = await prisma.not_recipes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends not_recipesUpdateManyArgs>(args: SelectSubset<T, not_recipesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Not_recipes and returns the data updated in the database.
     * @param {not_recipesUpdateManyAndReturnArgs} args - Arguments to update many Not_recipes.
     * @example
     * // Update many Not_recipes
     * const not_recipes = await prisma.not_recipes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Not_recipes and only return the `id`
     * const not_recipesWithIdOnly = await prisma.not_recipes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends not_recipesUpdateManyAndReturnArgs>(args: SelectSubset<T, not_recipesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$not_recipesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Not_recipes.
     * @param {not_recipesUpsertArgs} args - Arguments to update or create a Not_recipes.
     * @example
     * // Update or create a Not_recipes
     * const not_recipes = await prisma.not_recipes.upsert({
     *   create: {
     *     // ... data to create a Not_recipes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Not_recipes we want to update
     *   }
     * })
     */
    upsert<T extends not_recipesUpsertArgs>(args: SelectSubset<T, not_recipesUpsertArgs<ExtArgs>>): Prisma__not_recipesClient<$Result.GetResult<Prisma.$not_recipesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Not_recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {not_recipesCountArgs} args - Arguments to filter Not_recipes to count.
     * @example
     * // Count the number of Not_recipes
     * const count = await prisma.not_recipes.count({
     *   where: {
     *     // ... the filter for the Not_recipes we want to count
     *   }
     * })
    **/
    count<T extends not_recipesCountArgs>(
      args?: Subset<T, not_recipesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Not_recipesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Not_recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Not_recipesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Not_recipesAggregateArgs>(args: Subset<T, Not_recipesAggregateArgs>): Prisma.PrismaPromise<GetNot_recipesAggregateType<T>>

    /**
     * Group by Not_recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {not_recipesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends not_recipesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: not_recipesGroupByArgs['orderBy'] }
        : { orderBy?: not_recipesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, not_recipesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNot_recipesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the not_recipes model
   */
  readonly fields: not_recipesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for not_recipes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__not_recipesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the not_recipes model
   */
  interface not_recipesFieldRefs {
    readonly id: FieldRef<"not_recipes", 'Int'>
    readonly url: FieldRef<"not_recipes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * not_recipes findUnique
   */
  export type not_recipesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the not_recipes
     */
    select?: not_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the not_recipes
     */
    omit?: not_recipesOmit<ExtArgs> | null
    /**
     * Filter, which not_recipes to fetch.
     */
    where: not_recipesWhereUniqueInput
  }

  /**
   * not_recipes findUniqueOrThrow
   */
  export type not_recipesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the not_recipes
     */
    select?: not_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the not_recipes
     */
    omit?: not_recipesOmit<ExtArgs> | null
    /**
     * Filter, which not_recipes to fetch.
     */
    where: not_recipesWhereUniqueInput
  }

  /**
   * not_recipes findFirst
   */
  export type not_recipesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the not_recipes
     */
    select?: not_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the not_recipes
     */
    omit?: not_recipesOmit<ExtArgs> | null
    /**
     * Filter, which not_recipes to fetch.
     */
    where?: not_recipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of not_recipes to fetch.
     */
    orderBy?: not_recipesOrderByWithRelationInput | not_recipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for not_recipes.
     */
    cursor?: not_recipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` not_recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` not_recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of not_recipes.
     */
    distinct?: Not_recipesScalarFieldEnum | Not_recipesScalarFieldEnum[]
  }

  /**
   * not_recipes findFirstOrThrow
   */
  export type not_recipesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the not_recipes
     */
    select?: not_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the not_recipes
     */
    omit?: not_recipesOmit<ExtArgs> | null
    /**
     * Filter, which not_recipes to fetch.
     */
    where?: not_recipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of not_recipes to fetch.
     */
    orderBy?: not_recipesOrderByWithRelationInput | not_recipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for not_recipes.
     */
    cursor?: not_recipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` not_recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` not_recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of not_recipes.
     */
    distinct?: Not_recipesScalarFieldEnum | Not_recipesScalarFieldEnum[]
  }

  /**
   * not_recipes findMany
   */
  export type not_recipesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the not_recipes
     */
    select?: not_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the not_recipes
     */
    omit?: not_recipesOmit<ExtArgs> | null
    /**
     * Filter, which not_recipes to fetch.
     */
    where?: not_recipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of not_recipes to fetch.
     */
    orderBy?: not_recipesOrderByWithRelationInput | not_recipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing not_recipes.
     */
    cursor?: not_recipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` not_recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` not_recipes.
     */
    skip?: number
    distinct?: Not_recipesScalarFieldEnum | Not_recipesScalarFieldEnum[]
  }

  /**
   * not_recipes create
   */
  export type not_recipesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the not_recipes
     */
    select?: not_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the not_recipes
     */
    omit?: not_recipesOmit<ExtArgs> | null
    /**
     * The data needed to create a not_recipes.
     */
    data: XOR<not_recipesCreateInput, not_recipesUncheckedCreateInput>
  }

  /**
   * not_recipes createMany
   */
  export type not_recipesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many not_recipes.
     */
    data: not_recipesCreateManyInput | not_recipesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * not_recipes createManyAndReturn
   */
  export type not_recipesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the not_recipes
     */
    select?: not_recipesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the not_recipes
     */
    omit?: not_recipesOmit<ExtArgs> | null
    /**
     * The data used to create many not_recipes.
     */
    data: not_recipesCreateManyInput | not_recipesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * not_recipes update
   */
  export type not_recipesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the not_recipes
     */
    select?: not_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the not_recipes
     */
    omit?: not_recipesOmit<ExtArgs> | null
    /**
     * The data needed to update a not_recipes.
     */
    data: XOR<not_recipesUpdateInput, not_recipesUncheckedUpdateInput>
    /**
     * Choose, which not_recipes to update.
     */
    where: not_recipesWhereUniqueInput
  }

  /**
   * not_recipes updateMany
   */
  export type not_recipesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update not_recipes.
     */
    data: XOR<not_recipesUpdateManyMutationInput, not_recipesUncheckedUpdateManyInput>
    /**
     * Filter which not_recipes to update
     */
    where?: not_recipesWhereInput
    /**
     * Limit how many not_recipes to update.
     */
    limit?: number
  }

  /**
   * not_recipes updateManyAndReturn
   */
  export type not_recipesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the not_recipes
     */
    select?: not_recipesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the not_recipes
     */
    omit?: not_recipesOmit<ExtArgs> | null
    /**
     * The data used to update not_recipes.
     */
    data: XOR<not_recipesUpdateManyMutationInput, not_recipesUncheckedUpdateManyInput>
    /**
     * Filter which not_recipes to update
     */
    where?: not_recipesWhereInput
    /**
     * Limit how many not_recipes to update.
     */
    limit?: number
  }

  /**
   * not_recipes upsert
   */
  export type not_recipesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the not_recipes
     */
    select?: not_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the not_recipes
     */
    omit?: not_recipesOmit<ExtArgs> | null
    /**
     * The filter to search for the not_recipes to update in case it exists.
     */
    where: not_recipesWhereUniqueInput
    /**
     * In case the not_recipes found by the `where` argument doesn't exist, create a new not_recipes with this data.
     */
    create: XOR<not_recipesCreateInput, not_recipesUncheckedCreateInput>
    /**
     * In case the not_recipes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<not_recipesUpdateInput, not_recipesUncheckedUpdateInput>
  }

  /**
   * not_recipes delete
   */
  export type not_recipesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the not_recipes
     */
    select?: not_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the not_recipes
     */
    omit?: not_recipesOmit<ExtArgs> | null
    /**
     * Filter which not_recipes to delete.
     */
    where: not_recipesWhereUniqueInput
  }

  /**
   * not_recipes deleteMany
   */
  export type not_recipesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which not_recipes to delete
     */
    where?: not_recipesWhereInput
    /**
     * Limit how many not_recipes to delete.
     */
    limit?: number
  }

  /**
   * not_recipes without action
   */
  export type not_recipesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the not_recipes
     */
    select?: not_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the not_recipes
     */
    omit?: not_recipesOmit<ExtArgs> | null
  }


  /**
   * Model recipes
   */

  export type AggregateRecipes = {
    _count: RecipesCountAggregateOutputType | null
    _avg: RecipesAvgAggregateOutputType | null
    _sum: RecipesSumAggregateOutputType | null
    _min: RecipesMinAggregateOutputType | null
    _max: RecipesMaxAggregateOutputType | null
  }

  export type RecipesAvgAggregateOutputType = {
    id: number | null
  }

  export type RecipesSumAggregateOutputType = {
    id: number | null
  }

  export type RecipesMinAggregateOutputType = {
    id: number | null
    name: string | null
    url: string | null
    image_url: string | null
    last_mod: Date | null
  }

  export type RecipesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    url: string | null
    image_url: string | null
    last_mod: Date | null
  }

  export type RecipesCountAggregateOutputType = {
    id: number
    name: number
    url: number
    image_url: number
    last_mod: number
    _all: number
  }


  export type RecipesAvgAggregateInputType = {
    id?: true
  }

  export type RecipesSumAggregateInputType = {
    id?: true
  }

  export type RecipesMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    image_url?: true
    last_mod?: true
  }

  export type RecipesMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    image_url?: true
    last_mod?: true
  }

  export type RecipesCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    image_url?: true
    last_mod?: true
    _all?: true
  }

  export type RecipesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recipes to aggregate.
     */
    where?: recipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipes to fetch.
     */
    orderBy?: recipesOrderByWithRelationInput | recipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: recipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned recipes
    **/
    _count?: true | RecipesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipesMaxAggregateInputType
  }

  export type GetRecipesAggregateType<T extends RecipesAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipes[P]>
      : GetScalarType<T[P], AggregateRecipes[P]>
  }




  export type recipesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recipesWhereInput
    orderBy?: recipesOrderByWithAggregationInput | recipesOrderByWithAggregationInput[]
    by: RecipesScalarFieldEnum[] | RecipesScalarFieldEnum
    having?: recipesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipesCountAggregateInputType | true
    _avg?: RecipesAvgAggregateInputType
    _sum?: RecipesSumAggregateInputType
    _min?: RecipesMinAggregateInputType
    _max?: RecipesMaxAggregateInputType
  }

  export type RecipesGroupByOutputType = {
    id: number
    name: string | null
    url: string
    image_url: string | null
    last_mod: Date | null
    _count: RecipesCountAggregateOutputType | null
    _avg: RecipesAvgAggregateOutputType | null
    _sum: RecipesSumAggregateOutputType | null
    _min: RecipesMinAggregateOutputType | null
    _max: RecipesMaxAggregateOutputType | null
  }

  type GetRecipesGroupByPayload<T extends recipesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipesGroupByOutputType[P]>
            : GetScalarType<T[P], RecipesGroupByOutputType[P]>
        }
      >
    >


  export type recipesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    image_url?: boolean
    last_mod?: boolean
    authors_recipes?: boolean | recipes$authors_recipesArgs<ExtArgs>
    categories_recipes?: boolean | recipes$categories_recipesArgs<ExtArgs>
    ingredients_recipes?: boolean | recipes$ingredients_recipesArgs<ExtArgs>
    _count?: boolean | RecipesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipes"]>

  export type recipesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    image_url?: boolean
    last_mod?: boolean
  }, ExtArgs["result"]["recipes"]>

  export type recipesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    image_url?: boolean
    last_mod?: boolean
  }, ExtArgs["result"]["recipes"]>

  export type recipesSelectScalar = {
    id?: boolean
    name?: boolean
    url?: boolean
    image_url?: boolean
    last_mod?: boolean
  }

  export type recipesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "url" | "image_url" | "last_mod", ExtArgs["result"]["recipes"]>
  export type recipesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authors_recipes?: boolean | recipes$authors_recipesArgs<ExtArgs>
    categories_recipes?: boolean | recipes$categories_recipesArgs<ExtArgs>
    ingredients_recipes?: boolean | recipes$ingredients_recipesArgs<ExtArgs>
    _count?: boolean | RecipesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type recipesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type recipesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $recipesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "recipes"
    objects: {
      authors_recipes: Prisma.$authors_recipesPayload<ExtArgs>[]
      categories_recipes: Prisma.$categories_recipesPayload<ExtArgs>[]
      ingredients_recipes: Prisma.$ingredients_recipesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      url: string
      image_url: string | null
      last_mod: Date | null
    }, ExtArgs["result"]["recipes"]>
    composites: {}
  }

  type recipesGetPayload<S extends boolean | null | undefined | recipesDefaultArgs> = $Result.GetResult<Prisma.$recipesPayload, S>

  type recipesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<recipesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipesCountAggregateInputType | true
    }

  export interface recipesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['recipes'], meta: { name: 'recipes' } }
    /**
     * Find zero or one Recipes that matches the filter.
     * @param {recipesFindUniqueArgs} args - Arguments to find a Recipes
     * @example
     * // Get one Recipes
     * const recipes = await prisma.recipes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends recipesFindUniqueArgs>(args: SelectSubset<T, recipesFindUniqueArgs<ExtArgs>>): Prisma__recipesClient<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recipes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {recipesFindUniqueOrThrowArgs} args - Arguments to find a Recipes
     * @example
     * // Get one Recipes
     * const recipes = await prisma.recipes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends recipesFindUniqueOrThrowArgs>(args: SelectSubset<T, recipesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__recipesClient<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipesFindFirstArgs} args - Arguments to find a Recipes
     * @example
     * // Get one Recipes
     * const recipes = await prisma.recipes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends recipesFindFirstArgs>(args?: SelectSubset<T, recipesFindFirstArgs<ExtArgs>>): Prisma__recipesClient<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipesFindFirstOrThrowArgs} args - Arguments to find a Recipes
     * @example
     * // Get one Recipes
     * const recipes = await prisma.recipes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends recipesFindFirstOrThrowArgs>(args?: SelectSubset<T, recipesFindFirstOrThrowArgs<ExtArgs>>): Prisma__recipesClient<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipes
     * const recipes = await prisma.recipes.findMany()
     * 
     * // Get first 10 Recipes
     * const recipes = await prisma.recipes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipesWithIdOnly = await prisma.recipes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends recipesFindManyArgs>(args?: SelectSubset<T, recipesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recipes.
     * @param {recipesCreateArgs} args - Arguments to create a Recipes.
     * @example
     * // Create one Recipes
     * const Recipes = await prisma.recipes.create({
     *   data: {
     *     // ... data to create a Recipes
     *   }
     * })
     * 
     */
    create<T extends recipesCreateArgs>(args: SelectSubset<T, recipesCreateArgs<ExtArgs>>): Prisma__recipesClient<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recipes.
     * @param {recipesCreateManyArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipes = await prisma.recipes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends recipesCreateManyArgs>(args?: SelectSubset<T, recipesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recipes and returns the data saved in the database.
     * @param {recipesCreateManyAndReturnArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipes = await prisma.recipes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recipes and only return the `id`
     * const recipesWithIdOnly = await prisma.recipes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends recipesCreateManyAndReturnArgs>(args?: SelectSubset<T, recipesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recipes.
     * @param {recipesDeleteArgs} args - Arguments to delete one Recipes.
     * @example
     * // Delete one Recipes
     * const Recipes = await prisma.recipes.delete({
     *   where: {
     *     // ... filter to delete one Recipes
     *   }
     * })
     * 
     */
    delete<T extends recipesDeleteArgs>(args: SelectSubset<T, recipesDeleteArgs<ExtArgs>>): Prisma__recipesClient<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recipes.
     * @param {recipesUpdateArgs} args - Arguments to update one Recipes.
     * @example
     * // Update one Recipes
     * const recipes = await prisma.recipes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends recipesUpdateArgs>(args: SelectSubset<T, recipesUpdateArgs<ExtArgs>>): Prisma__recipesClient<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recipes.
     * @param {recipesDeleteManyArgs} args - Arguments to filter Recipes to delete.
     * @example
     * // Delete a few Recipes
     * const { count } = await prisma.recipes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends recipesDeleteManyArgs>(args?: SelectSubset<T, recipesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipes
     * const recipes = await prisma.recipes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends recipesUpdateManyArgs>(args: SelectSubset<T, recipesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes and returns the data updated in the database.
     * @param {recipesUpdateManyAndReturnArgs} args - Arguments to update many Recipes.
     * @example
     * // Update many Recipes
     * const recipes = await prisma.recipes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recipes and only return the `id`
     * const recipesWithIdOnly = await prisma.recipes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends recipesUpdateManyAndReturnArgs>(args: SelectSubset<T, recipesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recipes.
     * @param {recipesUpsertArgs} args - Arguments to update or create a Recipes.
     * @example
     * // Update or create a Recipes
     * const recipes = await prisma.recipes.upsert({
     *   create: {
     *     // ... data to create a Recipes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipes we want to update
     *   }
     * })
     */
    upsert<T extends recipesUpsertArgs>(args: SelectSubset<T, recipesUpsertArgs<ExtArgs>>): Prisma__recipesClient<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipesCountArgs} args - Arguments to filter Recipes to count.
     * @example
     * // Count the number of Recipes
     * const count = await prisma.recipes.count({
     *   where: {
     *     // ... the filter for the Recipes we want to count
     *   }
     * })
    **/
    count<T extends recipesCountArgs>(
      args?: Subset<T, recipesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipesAggregateArgs>(args: Subset<T, RecipesAggregateArgs>): Prisma.PrismaPromise<GetRecipesAggregateType<T>>

    /**
     * Group by Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends recipesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: recipesGroupByArgs['orderBy'] }
        : { orderBy?: recipesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, recipesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the recipes model
   */
  readonly fields: recipesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for recipes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__recipesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    authors_recipes<T extends recipes$authors_recipesArgs<ExtArgs> = {}>(args?: Subset<T, recipes$authors_recipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authors_recipesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories_recipes<T extends recipes$categories_recipesArgs<ExtArgs> = {}>(args?: Subset<T, recipes$categories_recipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categories_recipesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ingredients_recipes<T extends recipes$ingredients_recipesArgs<ExtArgs> = {}>(args?: Subset<T, recipes$ingredients_recipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingredients_recipesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the recipes model
   */
  interface recipesFieldRefs {
    readonly id: FieldRef<"recipes", 'Int'>
    readonly name: FieldRef<"recipes", 'String'>
    readonly url: FieldRef<"recipes", 'String'>
    readonly image_url: FieldRef<"recipes", 'String'>
    readonly last_mod: FieldRef<"recipes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * recipes findUnique
   */
  export type recipesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipes
     */
    omit?: recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipesInclude<ExtArgs> | null
    /**
     * Filter, which recipes to fetch.
     */
    where: recipesWhereUniqueInput
  }

  /**
   * recipes findUniqueOrThrow
   */
  export type recipesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipes
     */
    omit?: recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipesInclude<ExtArgs> | null
    /**
     * Filter, which recipes to fetch.
     */
    where: recipesWhereUniqueInput
  }

  /**
   * recipes findFirst
   */
  export type recipesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipes
     */
    omit?: recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipesInclude<ExtArgs> | null
    /**
     * Filter, which recipes to fetch.
     */
    where?: recipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipes to fetch.
     */
    orderBy?: recipesOrderByWithRelationInput | recipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recipes.
     */
    cursor?: recipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recipes.
     */
    distinct?: RecipesScalarFieldEnum | RecipesScalarFieldEnum[]
  }

  /**
   * recipes findFirstOrThrow
   */
  export type recipesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipes
     */
    omit?: recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipesInclude<ExtArgs> | null
    /**
     * Filter, which recipes to fetch.
     */
    where?: recipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipes to fetch.
     */
    orderBy?: recipesOrderByWithRelationInput | recipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recipes.
     */
    cursor?: recipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recipes.
     */
    distinct?: RecipesScalarFieldEnum | RecipesScalarFieldEnum[]
  }

  /**
   * recipes findMany
   */
  export type recipesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipes
     */
    omit?: recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipesInclude<ExtArgs> | null
    /**
     * Filter, which recipes to fetch.
     */
    where?: recipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipes to fetch.
     */
    orderBy?: recipesOrderByWithRelationInput | recipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing recipes.
     */
    cursor?: recipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipes.
     */
    skip?: number
    distinct?: RecipesScalarFieldEnum | RecipesScalarFieldEnum[]
  }

  /**
   * recipes create
   */
  export type recipesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipes
     */
    omit?: recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipesInclude<ExtArgs> | null
    /**
     * The data needed to create a recipes.
     */
    data: XOR<recipesCreateInput, recipesUncheckedCreateInput>
  }

  /**
   * recipes createMany
   */
  export type recipesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many recipes.
     */
    data: recipesCreateManyInput | recipesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * recipes createManyAndReturn
   */
  export type recipesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the recipes
     */
    omit?: recipesOmit<ExtArgs> | null
    /**
     * The data used to create many recipes.
     */
    data: recipesCreateManyInput | recipesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * recipes update
   */
  export type recipesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipes
     */
    omit?: recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipesInclude<ExtArgs> | null
    /**
     * The data needed to update a recipes.
     */
    data: XOR<recipesUpdateInput, recipesUncheckedUpdateInput>
    /**
     * Choose, which recipes to update.
     */
    where: recipesWhereUniqueInput
  }

  /**
   * recipes updateMany
   */
  export type recipesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update recipes.
     */
    data: XOR<recipesUpdateManyMutationInput, recipesUncheckedUpdateManyInput>
    /**
     * Filter which recipes to update
     */
    where?: recipesWhereInput
    /**
     * Limit how many recipes to update.
     */
    limit?: number
  }

  /**
   * recipes updateManyAndReturn
   */
  export type recipesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the recipes
     */
    omit?: recipesOmit<ExtArgs> | null
    /**
     * The data used to update recipes.
     */
    data: XOR<recipesUpdateManyMutationInput, recipesUncheckedUpdateManyInput>
    /**
     * Filter which recipes to update
     */
    where?: recipesWhereInput
    /**
     * Limit how many recipes to update.
     */
    limit?: number
  }

  /**
   * recipes upsert
   */
  export type recipesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipes
     */
    omit?: recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipesInclude<ExtArgs> | null
    /**
     * The filter to search for the recipes to update in case it exists.
     */
    where: recipesWhereUniqueInput
    /**
     * In case the recipes found by the `where` argument doesn't exist, create a new recipes with this data.
     */
    create: XOR<recipesCreateInput, recipesUncheckedCreateInput>
    /**
     * In case the recipes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<recipesUpdateInput, recipesUncheckedUpdateInput>
  }

  /**
   * recipes delete
   */
  export type recipesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipes
     */
    omit?: recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipesInclude<ExtArgs> | null
    /**
     * Filter which recipes to delete.
     */
    where: recipesWhereUniqueInput
  }

  /**
   * recipes deleteMany
   */
  export type recipesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recipes to delete
     */
    where?: recipesWhereInput
    /**
     * Limit how many recipes to delete.
     */
    limit?: number
  }

  /**
   * recipes.authors_recipes
   */
  export type recipes$authors_recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors_recipes
     */
    select?: authors_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authors_recipes
     */
    omit?: authors_recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authors_recipesInclude<ExtArgs> | null
    where?: authors_recipesWhereInput
    orderBy?: authors_recipesOrderByWithRelationInput | authors_recipesOrderByWithRelationInput[]
    cursor?: authors_recipesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Authors_recipesScalarFieldEnum | Authors_recipesScalarFieldEnum[]
  }

  /**
   * recipes.categories_recipes
   */
  export type recipes$categories_recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories_recipes
     */
    select?: categories_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories_recipes
     */
    omit?: categories_recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categories_recipesInclude<ExtArgs> | null
    where?: categories_recipesWhereInput
    orderBy?: categories_recipesOrderByWithRelationInput | categories_recipesOrderByWithRelationInput[]
    cursor?: categories_recipesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Categories_recipesScalarFieldEnum | Categories_recipesScalarFieldEnum[]
  }

  /**
   * recipes.ingredients_recipes
   */
  export type recipes$ingredients_recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredients_recipes
     */
    select?: ingredients_recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredients_recipes
     */
    omit?: ingredients_recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredients_recipesInclude<ExtArgs> | null
    where?: ingredients_recipesWhereInput
    orderBy?: ingredients_recipesOrderByWithRelationInput | ingredients_recipesOrderByWithRelationInput[]
    cursor?: ingredients_recipesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Ingredients_recipesScalarFieldEnum | Ingredients_recipesScalarFieldEnum[]
  }

  /**
   * recipes without action
   */
  export type recipesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipes
     */
    omit?: recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AuthorsScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type AuthorsScalarFieldEnum = (typeof AuthorsScalarFieldEnum)[keyof typeof AuthorsScalarFieldEnum]


  export const Authors_recipesScalarFieldEnum: {
    id: 'id',
    author_id: 'author_id',
    recipe_id: 'recipe_id'
  };

  export type Authors_recipesScalarFieldEnum = (typeof Authors_recipesScalarFieldEnum)[keyof typeof Authors_recipesScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const Categories_recipesScalarFieldEnum: {
    id: 'id',
    category_id: 'category_id',
    recipe_id: 'recipe_id'
  };

  export type Categories_recipesScalarFieldEnum = (typeof Categories_recipesScalarFieldEnum)[keyof typeof Categories_recipesScalarFieldEnum]


  export const IngredientsScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type IngredientsScalarFieldEnum = (typeof IngredientsScalarFieldEnum)[keyof typeof IngredientsScalarFieldEnum]


  export const Ingredients_recipesScalarFieldEnum: {
    id: 'id',
    ingredient_id: 'ingredient_id',
    recipe_id: 'recipe_id',
    full_text: 'full_text'
  };

  export type Ingredients_recipesScalarFieldEnum = (typeof Ingredients_recipesScalarFieldEnum)[keyof typeof Ingredients_recipesScalarFieldEnum]


  export const Not_recipesScalarFieldEnum: {
    id: 'id',
    url: 'url'
  };

  export type Not_recipesScalarFieldEnum = (typeof Not_recipesScalarFieldEnum)[keyof typeof Not_recipesScalarFieldEnum]


  export const RecipesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    image_url: 'image_url',
    last_mod: 'last_mod'
  };

  export type RecipesScalarFieldEnum = (typeof RecipesScalarFieldEnum)[keyof typeof RecipesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type authorsWhereInput = {
    AND?: authorsWhereInput | authorsWhereInput[]
    OR?: authorsWhereInput[]
    NOT?: authorsWhereInput | authorsWhereInput[]
    id?: IntFilter<"authors"> | number
    name?: StringFilter<"authors"> | string
    authors_recipes?: Authors_recipesListRelationFilter
  }

  export type authorsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    authors_recipes?: authors_recipesOrderByRelationAggregateInput
  }

  export type authorsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: authorsWhereInput | authorsWhereInput[]
    OR?: authorsWhereInput[]
    NOT?: authorsWhereInput | authorsWhereInput[]
    authors_recipes?: Authors_recipesListRelationFilter
  }, "id" | "name">

  export type authorsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: authorsCountOrderByAggregateInput
    _avg?: authorsAvgOrderByAggregateInput
    _max?: authorsMaxOrderByAggregateInput
    _min?: authorsMinOrderByAggregateInput
    _sum?: authorsSumOrderByAggregateInput
  }

  export type authorsScalarWhereWithAggregatesInput = {
    AND?: authorsScalarWhereWithAggregatesInput | authorsScalarWhereWithAggregatesInput[]
    OR?: authorsScalarWhereWithAggregatesInput[]
    NOT?: authorsScalarWhereWithAggregatesInput | authorsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"authors"> | number
    name?: StringWithAggregatesFilter<"authors"> | string
  }

  export type authors_recipesWhereInput = {
    AND?: authors_recipesWhereInput | authors_recipesWhereInput[]
    OR?: authors_recipesWhereInput[]
    NOT?: authors_recipesWhereInput | authors_recipesWhereInput[]
    id?: IntFilter<"authors_recipes"> | number
    author_id?: IntFilter<"authors_recipes"> | number
    recipe_id?: IntFilter<"authors_recipes"> | number
    authors?: XOR<AuthorsScalarRelationFilter, authorsWhereInput>
    recipes?: XOR<RecipesScalarRelationFilter, recipesWhereInput>
  }

  export type authors_recipesOrderByWithRelationInput = {
    id?: SortOrder
    author_id?: SortOrder
    recipe_id?: SortOrder
    authors?: authorsOrderByWithRelationInput
    recipes?: recipesOrderByWithRelationInput
  }

  export type authors_recipesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: authors_recipesWhereInput | authors_recipesWhereInput[]
    OR?: authors_recipesWhereInput[]
    NOT?: authors_recipesWhereInput | authors_recipesWhereInput[]
    author_id?: IntFilter<"authors_recipes"> | number
    recipe_id?: IntFilter<"authors_recipes"> | number
    authors?: XOR<AuthorsScalarRelationFilter, authorsWhereInput>
    recipes?: XOR<RecipesScalarRelationFilter, recipesWhereInput>
  }, "id">

  export type authors_recipesOrderByWithAggregationInput = {
    id?: SortOrder
    author_id?: SortOrder
    recipe_id?: SortOrder
    _count?: authors_recipesCountOrderByAggregateInput
    _avg?: authors_recipesAvgOrderByAggregateInput
    _max?: authors_recipesMaxOrderByAggregateInput
    _min?: authors_recipesMinOrderByAggregateInput
    _sum?: authors_recipesSumOrderByAggregateInput
  }

  export type authors_recipesScalarWhereWithAggregatesInput = {
    AND?: authors_recipesScalarWhereWithAggregatesInput | authors_recipesScalarWhereWithAggregatesInput[]
    OR?: authors_recipesScalarWhereWithAggregatesInput[]
    NOT?: authors_recipesScalarWhereWithAggregatesInput | authors_recipesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"authors_recipes"> | number
    author_id?: IntWithAggregatesFilter<"authors_recipes"> | number
    recipe_id?: IntWithAggregatesFilter<"authors_recipes"> | number
  }

  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    id?: IntFilter<"categories"> | number
    name?: StringFilter<"categories"> | string
    categories_recipes?: Categories_recipesListRelationFilter
  }

  export type categoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    categories_recipes?: categories_recipesOrderByRelationAggregateInput
  }

  export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    categories_recipes?: Categories_recipesListRelationFilter
  }, "id" | "name">

  export type categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _avg?: categoriesAvgOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
    _sum?: categoriesSumOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    OR?: categoriesScalarWhereWithAggregatesInput[]
    NOT?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"categories"> | number
    name?: StringWithAggregatesFilter<"categories"> | string
  }

  export type categories_recipesWhereInput = {
    AND?: categories_recipesWhereInput | categories_recipesWhereInput[]
    OR?: categories_recipesWhereInput[]
    NOT?: categories_recipesWhereInput | categories_recipesWhereInput[]
    id?: IntFilter<"categories_recipes"> | number
    category_id?: IntFilter<"categories_recipes"> | number
    recipe_id?: IntFilter<"categories_recipes"> | number
    categories?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
    recipes?: XOR<RecipesScalarRelationFilter, recipesWhereInput>
  }

  export type categories_recipesOrderByWithRelationInput = {
    id?: SortOrder
    category_id?: SortOrder
    recipe_id?: SortOrder
    categories?: categoriesOrderByWithRelationInput
    recipes?: recipesOrderByWithRelationInput
  }

  export type categories_recipesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: categories_recipesWhereInput | categories_recipesWhereInput[]
    OR?: categories_recipesWhereInput[]
    NOT?: categories_recipesWhereInput | categories_recipesWhereInput[]
    category_id?: IntFilter<"categories_recipes"> | number
    recipe_id?: IntFilter<"categories_recipes"> | number
    categories?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
    recipes?: XOR<RecipesScalarRelationFilter, recipesWhereInput>
  }, "id">

  export type categories_recipesOrderByWithAggregationInput = {
    id?: SortOrder
    category_id?: SortOrder
    recipe_id?: SortOrder
    _count?: categories_recipesCountOrderByAggregateInput
    _avg?: categories_recipesAvgOrderByAggregateInput
    _max?: categories_recipesMaxOrderByAggregateInput
    _min?: categories_recipesMinOrderByAggregateInput
    _sum?: categories_recipesSumOrderByAggregateInput
  }

  export type categories_recipesScalarWhereWithAggregatesInput = {
    AND?: categories_recipesScalarWhereWithAggregatesInput | categories_recipesScalarWhereWithAggregatesInput[]
    OR?: categories_recipesScalarWhereWithAggregatesInput[]
    NOT?: categories_recipesScalarWhereWithAggregatesInput | categories_recipesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"categories_recipes"> | number
    category_id?: IntWithAggregatesFilter<"categories_recipes"> | number
    recipe_id?: IntWithAggregatesFilter<"categories_recipes"> | number
  }

  export type ingredientsWhereInput = {
    AND?: ingredientsWhereInput | ingredientsWhereInput[]
    OR?: ingredientsWhereInput[]
    NOT?: ingredientsWhereInput | ingredientsWhereInput[]
    id?: IntFilter<"ingredients"> | number
    name?: StringFilter<"ingredients"> | string
    ingredients_recipes?: Ingredients_recipesListRelationFilter
  }

  export type ingredientsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    ingredients_recipes?: ingredients_recipesOrderByRelationAggregateInput
  }

  export type ingredientsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ingredientsWhereInput | ingredientsWhereInput[]
    OR?: ingredientsWhereInput[]
    NOT?: ingredientsWhereInput | ingredientsWhereInput[]
    ingredients_recipes?: Ingredients_recipesListRelationFilter
  }, "id" | "name">

  export type ingredientsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ingredientsCountOrderByAggregateInput
    _avg?: ingredientsAvgOrderByAggregateInput
    _max?: ingredientsMaxOrderByAggregateInput
    _min?: ingredientsMinOrderByAggregateInput
    _sum?: ingredientsSumOrderByAggregateInput
  }

  export type ingredientsScalarWhereWithAggregatesInput = {
    AND?: ingredientsScalarWhereWithAggregatesInput | ingredientsScalarWhereWithAggregatesInput[]
    OR?: ingredientsScalarWhereWithAggregatesInput[]
    NOT?: ingredientsScalarWhereWithAggregatesInput | ingredientsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ingredients"> | number
    name?: StringWithAggregatesFilter<"ingredients"> | string
  }

  export type ingredients_recipesWhereInput = {
    AND?: ingredients_recipesWhereInput | ingredients_recipesWhereInput[]
    OR?: ingredients_recipesWhereInput[]
    NOT?: ingredients_recipesWhereInput | ingredients_recipesWhereInput[]
    id?: IntFilter<"ingredients_recipes"> | number
    ingredient_id?: IntFilter<"ingredients_recipes"> | number
    recipe_id?: IntFilter<"ingredients_recipes"> | number
    full_text?: StringNullableFilter<"ingredients_recipes"> | string | null
    ingredients?: XOR<IngredientsScalarRelationFilter, ingredientsWhereInput>
    recipes?: XOR<RecipesScalarRelationFilter, recipesWhereInput>
  }

  export type ingredients_recipesOrderByWithRelationInput = {
    id?: SortOrder
    ingredient_id?: SortOrder
    recipe_id?: SortOrder
    full_text?: SortOrderInput | SortOrder
    ingredients?: ingredientsOrderByWithRelationInput
    recipes?: recipesOrderByWithRelationInput
  }

  export type ingredients_recipesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ingredients_recipesWhereInput | ingredients_recipesWhereInput[]
    OR?: ingredients_recipesWhereInput[]
    NOT?: ingredients_recipesWhereInput | ingredients_recipesWhereInput[]
    ingredient_id?: IntFilter<"ingredients_recipes"> | number
    recipe_id?: IntFilter<"ingredients_recipes"> | number
    full_text?: StringNullableFilter<"ingredients_recipes"> | string | null
    ingredients?: XOR<IngredientsScalarRelationFilter, ingredientsWhereInput>
    recipes?: XOR<RecipesScalarRelationFilter, recipesWhereInput>
  }, "id">

  export type ingredients_recipesOrderByWithAggregationInput = {
    id?: SortOrder
    ingredient_id?: SortOrder
    recipe_id?: SortOrder
    full_text?: SortOrderInput | SortOrder
    _count?: ingredients_recipesCountOrderByAggregateInput
    _avg?: ingredients_recipesAvgOrderByAggregateInput
    _max?: ingredients_recipesMaxOrderByAggregateInput
    _min?: ingredients_recipesMinOrderByAggregateInput
    _sum?: ingredients_recipesSumOrderByAggregateInput
  }

  export type ingredients_recipesScalarWhereWithAggregatesInput = {
    AND?: ingredients_recipesScalarWhereWithAggregatesInput | ingredients_recipesScalarWhereWithAggregatesInput[]
    OR?: ingredients_recipesScalarWhereWithAggregatesInput[]
    NOT?: ingredients_recipesScalarWhereWithAggregatesInput | ingredients_recipesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ingredients_recipes"> | number
    ingredient_id?: IntWithAggregatesFilter<"ingredients_recipes"> | number
    recipe_id?: IntWithAggregatesFilter<"ingredients_recipes"> | number
    full_text?: StringNullableWithAggregatesFilter<"ingredients_recipes"> | string | null
  }

  export type not_recipesWhereInput = {
    AND?: not_recipesWhereInput | not_recipesWhereInput[]
    OR?: not_recipesWhereInput[]
    NOT?: not_recipesWhereInput | not_recipesWhereInput[]
    id?: IntFilter<"not_recipes"> | number
    url?: StringFilter<"not_recipes"> | string
  }

  export type not_recipesOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
  }

  export type not_recipesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    url?: string
    AND?: not_recipesWhereInput | not_recipesWhereInput[]
    OR?: not_recipesWhereInput[]
    NOT?: not_recipesWhereInput | not_recipesWhereInput[]
  }, "id" | "url">

  export type not_recipesOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    _count?: not_recipesCountOrderByAggregateInput
    _avg?: not_recipesAvgOrderByAggregateInput
    _max?: not_recipesMaxOrderByAggregateInput
    _min?: not_recipesMinOrderByAggregateInput
    _sum?: not_recipesSumOrderByAggregateInput
  }

  export type not_recipesScalarWhereWithAggregatesInput = {
    AND?: not_recipesScalarWhereWithAggregatesInput | not_recipesScalarWhereWithAggregatesInput[]
    OR?: not_recipesScalarWhereWithAggregatesInput[]
    NOT?: not_recipesScalarWhereWithAggregatesInput | not_recipesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"not_recipes"> | number
    url?: StringWithAggregatesFilter<"not_recipes"> | string
  }

  export type recipesWhereInput = {
    AND?: recipesWhereInput | recipesWhereInput[]
    OR?: recipesWhereInput[]
    NOT?: recipesWhereInput | recipesWhereInput[]
    id?: IntFilter<"recipes"> | number
    name?: StringNullableFilter<"recipes"> | string | null
    url?: StringFilter<"recipes"> | string
    image_url?: StringNullableFilter<"recipes"> | string | null
    last_mod?: DateTimeNullableFilter<"recipes"> | Date | string | null
    authors_recipes?: Authors_recipesListRelationFilter
    categories_recipes?: Categories_recipesListRelationFilter
    ingredients_recipes?: Ingredients_recipesListRelationFilter
  }

  export type recipesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    url?: SortOrder
    image_url?: SortOrderInput | SortOrder
    last_mod?: SortOrderInput | SortOrder
    authors_recipes?: authors_recipesOrderByRelationAggregateInput
    categories_recipes?: categories_recipesOrderByRelationAggregateInput
    ingredients_recipes?: ingredients_recipesOrderByRelationAggregateInput
  }

  export type recipesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    url?: string
    AND?: recipesWhereInput | recipesWhereInput[]
    OR?: recipesWhereInput[]
    NOT?: recipesWhereInput | recipesWhereInput[]
    name?: StringNullableFilter<"recipes"> | string | null
    image_url?: StringNullableFilter<"recipes"> | string | null
    last_mod?: DateTimeNullableFilter<"recipes"> | Date | string | null
    authors_recipes?: Authors_recipesListRelationFilter
    categories_recipes?: Categories_recipesListRelationFilter
    ingredients_recipes?: Ingredients_recipesListRelationFilter
  }, "id" | "url">

  export type recipesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    url?: SortOrder
    image_url?: SortOrderInput | SortOrder
    last_mod?: SortOrderInput | SortOrder
    _count?: recipesCountOrderByAggregateInput
    _avg?: recipesAvgOrderByAggregateInput
    _max?: recipesMaxOrderByAggregateInput
    _min?: recipesMinOrderByAggregateInput
    _sum?: recipesSumOrderByAggregateInput
  }

  export type recipesScalarWhereWithAggregatesInput = {
    AND?: recipesScalarWhereWithAggregatesInput | recipesScalarWhereWithAggregatesInput[]
    OR?: recipesScalarWhereWithAggregatesInput[]
    NOT?: recipesScalarWhereWithAggregatesInput | recipesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"recipes"> | number
    name?: StringNullableWithAggregatesFilter<"recipes"> | string | null
    url?: StringWithAggregatesFilter<"recipes"> | string
    image_url?: StringNullableWithAggregatesFilter<"recipes"> | string | null
    last_mod?: DateTimeNullableWithAggregatesFilter<"recipes"> | Date | string | null
  }

  export type authorsCreateInput = {
    name: string
    authors_recipes?: authors_recipesCreateNestedManyWithoutAuthorsInput
  }

  export type authorsUncheckedCreateInput = {
    id?: number
    name: string
    authors_recipes?: authors_recipesUncheckedCreateNestedManyWithoutAuthorsInput
  }

  export type authorsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    authors_recipes?: authors_recipesUpdateManyWithoutAuthorsNestedInput
  }

  export type authorsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    authors_recipes?: authors_recipesUncheckedUpdateManyWithoutAuthorsNestedInput
  }

  export type authorsCreateManyInput = {
    id?: number
    name: string
  }

  export type authorsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type authorsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type authors_recipesCreateInput = {
    authors: authorsCreateNestedOneWithoutAuthors_recipesInput
    recipes: recipesCreateNestedOneWithoutAuthors_recipesInput
  }

  export type authors_recipesUncheckedCreateInput = {
    id?: number
    author_id: number
    recipe_id: number
  }

  export type authors_recipesUpdateInput = {
    authors?: authorsUpdateOneRequiredWithoutAuthors_recipesNestedInput
    recipes?: recipesUpdateOneRequiredWithoutAuthors_recipesNestedInput
  }

  export type authors_recipesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    author_id?: IntFieldUpdateOperationsInput | number
    recipe_id?: IntFieldUpdateOperationsInput | number
  }

  export type authors_recipesCreateManyInput = {
    id?: number
    author_id: number
    recipe_id: number
  }

  export type authors_recipesUpdateManyMutationInput = {

  }

  export type authors_recipesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    author_id?: IntFieldUpdateOperationsInput | number
    recipe_id?: IntFieldUpdateOperationsInput | number
  }

  export type categoriesCreateInput = {
    name: string
    categories_recipes?: categories_recipesCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateInput = {
    id?: number
    name: string
    categories_recipes?: categories_recipesUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    categories_recipes?: categories_recipesUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categories_recipes?: categories_recipesUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesCreateManyInput = {
    id?: number
    name: string
  }

  export type categoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type categoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type categories_recipesCreateInput = {
    categories: categoriesCreateNestedOneWithoutCategories_recipesInput
    recipes: recipesCreateNestedOneWithoutCategories_recipesInput
  }

  export type categories_recipesUncheckedCreateInput = {
    id?: number
    category_id: number
    recipe_id: number
  }

  export type categories_recipesUpdateInput = {
    categories?: categoriesUpdateOneRequiredWithoutCategories_recipesNestedInput
    recipes?: recipesUpdateOneRequiredWithoutCategories_recipesNestedInput
  }

  export type categories_recipesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    recipe_id?: IntFieldUpdateOperationsInput | number
  }

  export type categories_recipesCreateManyInput = {
    id?: number
    category_id: number
    recipe_id: number
  }

  export type categories_recipesUpdateManyMutationInput = {

  }

  export type categories_recipesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    recipe_id?: IntFieldUpdateOperationsInput | number
  }

  export type ingredientsCreateInput = {
    name: string
    ingredients_recipes?: ingredients_recipesCreateNestedManyWithoutIngredientsInput
  }

  export type ingredientsUncheckedCreateInput = {
    id?: number
    name: string
    ingredients_recipes?: ingredients_recipesUncheckedCreateNestedManyWithoutIngredientsInput
  }

  export type ingredientsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    ingredients_recipes?: ingredients_recipesUpdateManyWithoutIngredientsNestedInput
  }

  export type ingredientsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    ingredients_recipes?: ingredients_recipesUncheckedUpdateManyWithoutIngredientsNestedInput
  }

  export type ingredientsCreateManyInput = {
    id?: number
    name: string
  }

  export type ingredientsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ingredientsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ingredients_recipesCreateInput = {
    full_text?: string | null
    ingredients: ingredientsCreateNestedOneWithoutIngredients_recipesInput
    recipes: recipesCreateNestedOneWithoutIngredients_recipesInput
  }

  export type ingredients_recipesUncheckedCreateInput = {
    id?: number
    ingredient_id: number
    recipe_id: number
    full_text?: string | null
  }

  export type ingredients_recipesUpdateInput = {
    full_text?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: ingredientsUpdateOneRequiredWithoutIngredients_recipesNestedInput
    recipes?: recipesUpdateOneRequiredWithoutIngredients_recipesNestedInput
  }

  export type ingredients_recipesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ingredient_id?: IntFieldUpdateOperationsInput | number
    recipe_id?: IntFieldUpdateOperationsInput | number
    full_text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ingredients_recipesCreateManyInput = {
    id?: number
    ingredient_id: number
    recipe_id: number
    full_text?: string | null
  }

  export type ingredients_recipesUpdateManyMutationInput = {
    full_text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ingredients_recipesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ingredient_id?: IntFieldUpdateOperationsInput | number
    recipe_id?: IntFieldUpdateOperationsInput | number
    full_text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type not_recipesCreateInput = {
    url: string
  }

  export type not_recipesUncheckedCreateInput = {
    id?: number
    url: string
  }

  export type not_recipesUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type not_recipesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type not_recipesCreateManyInput = {
    id?: number
    url: string
  }

  export type not_recipesUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type not_recipesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type recipesCreateInput = {
    name?: string | null
    url: string
    image_url?: string | null
    last_mod?: Date | string | null
    authors_recipes?: authors_recipesCreateNestedManyWithoutRecipesInput
    categories_recipes?: categories_recipesCreateNestedManyWithoutRecipesInput
    ingredients_recipes?: ingredients_recipesCreateNestedManyWithoutRecipesInput
  }

  export type recipesUncheckedCreateInput = {
    id?: number
    name?: string | null
    url: string
    image_url?: string | null
    last_mod?: Date | string | null
    authors_recipes?: authors_recipesUncheckedCreateNestedManyWithoutRecipesInput
    categories_recipes?: categories_recipesUncheckedCreateNestedManyWithoutRecipesInput
    ingredients_recipes?: ingredients_recipesUncheckedCreateNestedManyWithoutRecipesInput
  }

  export type recipesUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_mod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authors_recipes?: authors_recipesUpdateManyWithoutRecipesNestedInput
    categories_recipes?: categories_recipesUpdateManyWithoutRecipesNestedInput
    ingredients_recipes?: ingredients_recipesUpdateManyWithoutRecipesNestedInput
  }

  export type recipesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_mod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authors_recipes?: authors_recipesUncheckedUpdateManyWithoutRecipesNestedInput
    categories_recipes?: categories_recipesUncheckedUpdateManyWithoutRecipesNestedInput
    ingredients_recipes?: ingredients_recipesUncheckedUpdateManyWithoutRecipesNestedInput
  }

  export type recipesCreateManyInput = {
    id?: number
    name?: string | null
    url: string
    image_url?: string | null
    last_mod?: Date | string | null
  }

  export type recipesUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_mod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type recipesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_mod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Authors_recipesListRelationFilter = {
    every?: authors_recipesWhereInput
    some?: authors_recipesWhereInput
    none?: authors_recipesWhereInput
  }

  export type authors_recipesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type authorsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type authorsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type authorsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type authorsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type authorsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type AuthorsScalarRelationFilter = {
    is?: authorsWhereInput
    isNot?: authorsWhereInput
  }

  export type RecipesScalarRelationFilter = {
    is?: recipesWhereInput
    isNot?: recipesWhereInput
  }

  export type authors_recipesCountOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    recipe_id?: SortOrder
  }

  export type authors_recipesAvgOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    recipe_id?: SortOrder
  }

  export type authors_recipesMaxOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    recipe_id?: SortOrder
  }

  export type authors_recipesMinOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    recipe_id?: SortOrder
  }

  export type authors_recipesSumOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    recipe_id?: SortOrder
  }

  export type Categories_recipesListRelationFilter = {
    every?: categories_recipesWhereInput
    some?: categories_recipesWhereInput
    none?: categories_recipesWhereInput
  }

  export type categories_recipesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type categoriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type categoriesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriesScalarRelationFilter = {
    is?: categoriesWhereInput
    isNot?: categoriesWhereInput
  }

  export type categories_recipesCountOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    recipe_id?: SortOrder
  }

  export type categories_recipesAvgOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    recipe_id?: SortOrder
  }

  export type categories_recipesMaxOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    recipe_id?: SortOrder
  }

  export type categories_recipesMinOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    recipe_id?: SortOrder
  }

  export type categories_recipesSumOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    recipe_id?: SortOrder
  }

  export type Ingredients_recipesListRelationFilter = {
    every?: ingredients_recipesWhereInput
    some?: ingredients_recipesWhereInput
    none?: ingredients_recipesWhereInput
  }

  export type ingredients_recipesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ingredientsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ingredientsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ingredientsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ingredientsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ingredientsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IngredientsScalarRelationFilter = {
    is?: ingredientsWhereInput
    isNot?: ingredientsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ingredients_recipesCountOrderByAggregateInput = {
    id?: SortOrder
    ingredient_id?: SortOrder
    recipe_id?: SortOrder
    full_text?: SortOrder
  }

  export type ingredients_recipesAvgOrderByAggregateInput = {
    id?: SortOrder
    ingredient_id?: SortOrder
    recipe_id?: SortOrder
  }

  export type ingredients_recipesMaxOrderByAggregateInput = {
    id?: SortOrder
    ingredient_id?: SortOrder
    recipe_id?: SortOrder
    full_text?: SortOrder
  }

  export type ingredients_recipesMinOrderByAggregateInput = {
    id?: SortOrder
    ingredient_id?: SortOrder
    recipe_id?: SortOrder
    full_text?: SortOrder
  }

  export type ingredients_recipesSumOrderByAggregateInput = {
    id?: SortOrder
    ingredient_id?: SortOrder
    recipe_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type not_recipesCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
  }

  export type not_recipesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type not_recipesMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
  }

  export type not_recipesMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
  }

  export type not_recipesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type recipesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    image_url?: SortOrder
    last_mod?: SortOrder
  }

  export type recipesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type recipesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    image_url?: SortOrder
    last_mod?: SortOrder
  }

  export type recipesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    image_url?: SortOrder
    last_mod?: SortOrder
  }

  export type recipesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type authors_recipesCreateNestedManyWithoutAuthorsInput = {
    create?: XOR<authors_recipesCreateWithoutAuthorsInput, authors_recipesUncheckedCreateWithoutAuthorsInput> | authors_recipesCreateWithoutAuthorsInput[] | authors_recipesUncheckedCreateWithoutAuthorsInput[]
    connectOrCreate?: authors_recipesCreateOrConnectWithoutAuthorsInput | authors_recipesCreateOrConnectWithoutAuthorsInput[]
    createMany?: authors_recipesCreateManyAuthorsInputEnvelope
    connect?: authors_recipesWhereUniqueInput | authors_recipesWhereUniqueInput[]
  }

  export type authors_recipesUncheckedCreateNestedManyWithoutAuthorsInput = {
    create?: XOR<authors_recipesCreateWithoutAuthorsInput, authors_recipesUncheckedCreateWithoutAuthorsInput> | authors_recipesCreateWithoutAuthorsInput[] | authors_recipesUncheckedCreateWithoutAuthorsInput[]
    connectOrCreate?: authors_recipesCreateOrConnectWithoutAuthorsInput | authors_recipesCreateOrConnectWithoutAuthorsInput[]
    createMany?: authors_recipesCreateManyAuthorsInputEnvelope
    connect?: authors_recipesWhereUniqueInput | authors_recipesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type authors_recipesUpdateManyWithoutAuthorsNestedInput = {
    create?: XOR<authors_recipesCreateWithoutAuthorsInput, authors_recipesUncheckedCreateWithoutAuthorsInput> | authors_recipesCreateWithoutAuthorsInput[] | authors_recipesUncheckedCreateWithoutAuthorsInput[]
    connectOrCreate?: authors_recipesCreateOrConnectWithoutAuthorsInput | authors_recipesCreateOrConnectWithoutAuthorsInput[]
    upsert?: authors_recipesUpsertWithWhereUniqueWithoutAuthorsInput | authors_recipesUpsertWithWhereUniqueWithoutAuthorsInput[]
    createMany?: authors_recipesCreateManyAuthorsInputEnvelope
    set?: authors_recipesWhereUniqueInput | authors_recipesWhereUniqueInput[]
    disconnect?: authors_recipesWhereUniqueInput | authors_recipesWhereUniqueInput[]
    delete?: authors_recipesWhereUniqueInput | authors_recipesWhereUniqueInput[]
    connect?: authors_recipesWhereUniqueInput | authors_recipesWhereUniqueInput[]
    update?: authors_recipesUpdateWithWhereUniqueWithoutAuthorsInput | authors_recipesUpdateWithWhereUniqueWithoutAuthorsInput[]
    updateMany?: authors_recipesUpdateManyWithWhereWithoutAuthorsInput | authors_recipesUpdateManyWithWhereWithoutAuthorsInput[]
    deleteMany?: authors_recipesScalarWhereInput | authors_recipesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type authors_recipesUncheckedUpdateManyWithoutAuthorsNestedInput = {
    create?: XOR<authors_recipesCreateWithoutAuthorsInput, authors_recipesUncheckedCreateWithoutAuthorsInput> | authors_recipesCreateWithoutAuthorsInput[] | authors_recipesUncheckedCreateWithoutAuthorsInput[]
    connectOrCreate?: authors_recipesCreateOrConnectWithoutAuthorsInput | authors_recipesCreateOrConnectWithoutAuthorsInput[]
    upsert?: authors_recipesUpsertWithWhereUniqueWithoutAuthorsInput | authors_recipesUpsertWithWhereUniqueWithoutAuthorsInput[]
    createMany?: authors_recipesCreateManyAuthorsInputEnvelope
    set?: authors_recipesWhereUniqueInput | authors_recipesWhereUniqueInput[]
    disconnect?: authors_recipesWhereUniqueInput | authors_recipesWhereUniqueInput[]
    delete?: authors_recipesWhereUniqueInput | authors_recipesWhereUniqueInput[]
    connect?: authors_recipesWhereUniqueInput | authors_recipesWhereUniqueInput[]
    update?: authors_recipesUpdateWithWhereUniqueWithoutAuthorsInput | authors_recipesUpdateWithWhereUniqueWithoutAuthorsInput[]
    updateMany?: authors_recipesUpdateManyWithWhereWithoutAuthorsInput | authors_recipesUpdateManyWithWhereWithoutAuthorsInput[]
    deleteMany?: authors_recipesScalarWhereInput | authors_recipesScalarWhereInput[]
  }

  export type authorsCreateNestedOneWithoutAuthors_recipesInput = {
    create?: XOR<authorsCreateWithoutAuthors_recipesInput, authorsUncheckedCreateWithoutAuthors_recipesInput>
    connectOrCreate?: authorsCreateOrConnectWithoutAuthors_recipesInput
    connect?: authorsWhereUniqueInput
  }

  export type recipesCreateNestedOneWithoutAuthors_recipesInput = {
    create?: XOR<recipesCreateWithoutAuthors_recipesInput, recipesUncheckedCreateWithoutAuthors_recipesInput>
    connectOrCreate?: recipesCreateOrConnectWithoutAuthors_recipesInput
    connect?: recipesWhereUniqueInput
  }

  export type authorsUpdateOneRequiredWithoutAuthors_recipesNestedInput = {
    create?: XOR<authorsCreateWithoutAuthors_recipesInput, authorsUncheckedCreateWithoutAuthors_recipesInput>
    connectOrCreate?: authorsCreateOrConnectWithoutAuthors_recipesInput
    upsert?: authorsUpsertWithoutAuthors_recipesInput
    connect?: authorsWhereUniqueInput
    update?: XOR<XOR<authorsUpdateToOneWithWhereWithoutAuthors_recipesInput, authorsUpdateWithoutAuthors_recipesInput>, authorsUncheckedUpdateWithoutAuthors_recipesInput>
  }

  export type recipesUpdateOneRequiredWithoutAuthors_recipesNestedInput = {
    create?: XOR<recipesCreateWithoutAuthors_recipesInput, recipesUncheckedCreateWithoutAuthors_recipesInput>
    connectOrCreate?: recipesCreateOrConnectWithoutAuthors_recipesInput
    upsert?: recipesUpsertWithoutAuthors_recipesInput
    connect?: recipesWhereUniqueInput
    update?: XOR<XOR<recipesUpdateToOneWithWhereWithoutAuthors_recipesInput, recipesUpdateWithoutAuthors_recipesInput>, recipesUncheckedUpdateWithoutAuthors_recipesInput>
  }

  export type categories_recipesCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<categories_recipesCreateWithoutCategoriesInput, categories_recipesUncheckedCreateWithoutCategoriesInput> | categories_recipesCreateWithoutCategoriesInput[] | categories_recipesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: categories_recipesCreateOrConnectWithoutCategoriesInput | categories_recipesCreateOrConnectWithoutCategoriesInput[]
    createMany?: categories_recipesCreateManyCategoriesInputEnvelope
    connect?: categories_recipesWhereUniqueInput | categories_recipesWhereUniqueInput[]
  }

  export type categories_recipesUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<categories_recipesCreateWithoutCategoriesInput, categories_recipesUncheckedCreateWithoutCategoriesInput> | categories_recipesCreateWithoutCategoriesInput[] | categories_recipesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: categories_recipesCreateOrConnectWithoutCategoriesInput | categories_recipesCreateOrConnectWithoutCategoriesInput[]
    createMany?: categories_recipesCreateManyCategoriesInputEnvelope
    connect?: categories_recipesWhereUniqueInput | categories_recipesWhereUniqueInput[]
  }

  export type categories_recipesUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<categories_recipesCreateWithoutCategoriesInput, categories_recipesUncheckedCreateWithoutCategoriesInput> | categories_recipesCreateWithoutCategoriesInput[] | categories_recipesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: categories_recipesCreateOrConnectWithoutCategoriesInput | categories_recipesCreateOrConnectWithoutCategoriesInput[]
    upsert?: categories_recipesUpsertWithWhereUniqueWithoutCategoriesInput | categories_recipesUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: categories_recipesCreateManyCategoriesInputEnvelope
    set?: categories_recipesWhereUniqueInput | categories_recipesWhereUniqueInput[]
    disconnect?: categories_recipesWhereUniqueInput | categories_recipesWhereUniqueInput[]
    delete?: categories_recipesWhereUniqueInput | categories_recipesWhereUniqueInput[]
    connect?: categories_recipesWhereUniqueInput | categories_recipesWhereUniqueInput[]
    update?: categories_recipesUpdateWithWhereUniqueWithoutCategoriesInput | categories_recipesUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: categories_recipesUpdateManyWithWhereWithoutCategoriesInput | categories_recipesUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: categories_recipesScalarWhereInput | categories_recipesScalarWhereInput[]
  }

  export type categories_recipesUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<categories_recipesCreateWithoutCategoriesInput, categories_recipesUncheckedCreateWithoutCategoriesInput> | categories_recipesCreateWithoutCategoriesInput[] | categories_recipesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: categories_recipesCreateOrConnectWithoutCategoriesInput | categories_recipesCreateOrConnectWithoutCategoriesInput[]
    upsert?: categories_recipesUpsertWithWhereUniqueWithoutCategoriesInput | categories_recipesUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: categories_recipesCreateManyCategoriesInputEnvelope
    set?: categories_recipesWhereUniqueInput | categories_recipesWhereUniqueInput[]
    disconnect?: categories_recipesWhereUniqueInput | categories_recipesWhereUniqueInput[]
    delete?: categories_recipesWhereUniqueInput | categories_recipesWhereUniqueInput[]
    connect?: categories_recipesWhereUniqueInput | categories_recipesWhereUniqueInput[]
    update?: categories_recipesUpdateWithWhereUniqueWithoutCategoriesInput | categories_recipesUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: categories_recipesUpdateManyWithWhereWithoutCategoriesInput | categories_recipesUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: categories_recipesScalarWhereInput | categories_recipesScalarWhereInput[]
  }

  export type categoriesCreateNestedOneWithoutCategories_recipesInput = {
    create?: XOR<categoriesCreateWithoutCategories_recipesInput, categoriesUncheckedCreateWithoutCategories_recipesInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutCategories_recipesInput
    connect?: categoriesWhereUniqueInput
  }

  export type recipesCreateNestedOneWithoutCategories_recipesInput = {
    create?: XOR<recipesCreateWithoutCategories_recipesInput, recipesUncheckedCreateWithoutCategories_recipesInput>
    connectOrCreate?: recipesCreateOrConnectWithoutCategories_recipesInput
    connect?: recipesWhereUniqueInput
  }

  export type categoriesUpdateOneRequiredWithoutCategories_recipesNestedInput = {
    create?: XOR<categoriesCreateWithoutCategories_recipesInput, categoriesUncheckedCreateWithoutCategories_recipesInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutCategories_recipesInput
    upsert?: categoriesUpsertWithoutCategories_recipesInput
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutCategories_recipesInput, categoriesUpdateWithoutCategories_recipesInput>, categoriesUncheckedUpdateWithoutCategories_recipesInput>
  }

  export type recipesUpdateOneRequiredWithoutCategories_recipesNestedInput = {
    create?: XOR<recipesCreateWithoutCategories_recipesInput, recipesUncheckedCreateWithoutCategories_recipesInput>
    connectOrCreate?: recipesCreateOrConnectWithoutCategories_recipesInput
    upsert?: recipesUpsertWithoutCategories_recipesInput
    connect?: recipesWhereUniqueInput
    update?: XOR<XOR<recipesUpdateToOneWithWhereWithoutCategories_recipesInput, recipesUpdateWithoutCategories_recipesInput>, recipesUncheckedUpdateWithoutCategories_recipesInput>
  }

  export type ingredients_recipesCreateNestedManyWithoutIngredientsInput = {
    create?: XOR<ingredients_recipesCreateWithoutIngredientsInput, ingredients_recipesUncheckedCreateWithoutIngredientsInput> | ingredients_recipesCreateWithoutIngredientsInput[] | ingredients_recipesUncheckedCreateWithoutIngredientsInput[]
    connectOrCreate?: ingredients_recipesCreateOrConnectWithoutIngredientsInput | ingredients_recipesCreateOrConnectWithoutIngredientsInput[]
    createMany?: ingredients_recipesCreateManyIngredientsInputEnvelope
    connect?: ingredients_recipesWhereUniqueInput | ingredients_recipesWhereUniqueInput[]
  }

  export type ingredients_recipesUncheckedCreateNestedManyWithoutIngredientsInput = {
    create?: XOR<ingredients_recipesCreateWithoutIngredientsInput, ingredients_recipesUncheckedCreateWithoutIngredientsInput> | ingredients_recipesCreateWithoutIngredientsInput[] | ingredients_recipesUncheckedCreateWithoutIngredientsInput[]
    connectOrCreate?: ingredients_recipesCreateOrConnectWithoutIngredientsInput | ingredients_recipesCreateOrConnectWithoutIngredientsInput[]
    createMany?: ingredients_recipesCreateManyIngredientsInputEnvelope
    connect?: ingredients_recipesWhereUniqueInput | ingredients_recipesWhereUniqueInput[]
  }

  export type ingredients_recipesUpdateManyWithoutIngredientsNestedInput = {
    create?: XOR<ingredients_recipesCreateWithoutIngredientsInput, ingredients_recipesUncheckedCreateWithoutIngredientsInput> | ingredients_recipesCreateWithoutIngredientsInput[] | ingredients_recipesUncheckedCreateWithoutIngredientsInput[]
    connectOrCreate?: ingredients_recipesCreateOrConnectWithoutIngredientsInput | ingredients_recipesCreateOrConnectWithoutIngredientsInput[]
    upsert?: ingredients_recipesUpsertWithWhereUniqueWithoutIngredientsInput | ingredients_recipesUpsertWithWhereUniqueWithoutIngredientsInput[]
    createMany?: ingredients_recipesCreateManyIngredientsInputEnvelope
    set?: ingredients_recipesWhereUniqueInput | ingredients_recipesWhereUniqueInput[]
    disconnect?: ingredients_recipesWhereUniqueInput | ingredients_recipesWhereUniqueInput[]
    delete?: ingredients_recipesWhereUniqueInput | ingredients_recipesWhereUniqueInput[]
    connect?: ingredients_recipesWhereUniqueInput | ingredients_recipesWhereUniqueInput[]
    update?: ingredients_recipesUpdateWithWhereUniqueWithoutIngredientsInput | ingredients_recipesUpdateWithWhereUniqueWithoutIngredientsInput[]
    updateMany?: ingredients_recipesUpdateManyWithWhereWithoutIngredientsInput | ingredients_recipesUpdateManyWithWhereWithoutIngredientsInput[]
    deleteMany?: ingredients_recipesScalarWhereInput | ingredients_recipesScalarWhereInput[]
  }

  export type ingredients_recipesUncheckedUpdateManyWithoutIngredientsNestedInput = {
    create?: XOR<ingredients_recipesCreateWithoutIngredientsInput, ingredients_recipesUncheckedCreateWithoutIngredientsInput> | ingredients_recipesCreateWithoutIngredientsInput[] | ingredients_recipesUncheckedCreateWithoutIngredientsInput[]
    connectOrCreate?: ingredients_recipesCreateOrConnectWithoutIngredientsInput | ingredients_recipesCreateOrConnectWithoutIngredientsInput[]
    upsert?: ingredients_recipesUpsertWithWhereUniqueWithoutIngredientsInput | ingredients_recipesUpsertWithWhereUniqueWithoutIngredientsInput[]
    createMany?: ingredients_recipesCreateManyIngredientsInputEnvelope
    set?: ingredients_recipesWhereUniqueInput | ingredients_recipesWhereUniqueInput[]
    disconnect?: ingredients_recipesWhereUniqueInput | ingredients_recipesWhereUniqueInput[]
    delete?: ingredients_recipesWhereUniqueInput | ingredients_recipesWhereUniqueInput[]
    connect?: ingredients_recipesWhereUniqueInput | ingredients_recipesWhereUniqueInput[]
    update?: ingredients_recipesUpdateWithWhereUniqueWithoutIngredientsInput | ingredients_recipesUpdateWithWhereUniqueWithoutIngredientsInput[]
    updateMany?: ingredients_recipesUpdateManyWithWhereWithoutIngredientsInput | ingredients_recipesUpdateManyWithWhereWithoutIngredientsInput[]
    deleteMany?: ingredients_recipesScalarWhereInput | ingredients_recipesScalarWhereInput[]
  }

  export type ingredientsCreateNestedOneWithoutIngredients_recipesInput = {
    create?: XOR<ingredientsCreateWithoutIngredients_recipesInput, ingredientsUncheckedCreateWithoutIngredients_recipesInput>
    connectOrCreate?: ingredientsCreateOrConnectWithoutIngredients_recipesInput
    connect?: ingredientsWhereUniqueInput
  }

  export type recipesCreateNestedOneWithoutIngredients_recipesInput = {
    create?: XOR<recipesCreateWithoutIngredients_recipesInput, recipesUncheckedCreateWithoutIngredients_recipesInput>
    connectOrCreate?: recipesCreateOrConnectWithoutIngredients_recipesInput
    connect?: recipesWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ingredientsUpdateOneRequiredWithoutIngredients_recipesNestedInput = {
    create?: XOR<ingredientsCreateWithoutIngredients_recipesInput, ingredientsUncheckedCreateWithoutIngredients_recipesInput>
    connectOrCreate?: ingredientsCreateOrConnectWithoutIngredients_recipesInput
    upsert?: ingredientsUpsertWithoutIngredients_recipesInput
    connect?: ingredientsWhereUniqueInput
    update?: XOR<XOR<ingredientsUpdateToOneWithWhereWithoutIngredients_recipesInput, ingredientsUpdateWithoutIngredients_recipesInput>, ingredientsUncheckedUpdateWithoutIngredients_recipesInput>
  }

  export type recipesUpdateOneRequiredWithoutIngredients_recipesNestedInput = {
    create?: XOR<recipesCreateWithoutIngredients_recipesInput, recipesUncheckedCreateWithoutIngredients_recipesInput>
    connectOrCreate?: recipesCreateOrConnectWithoutIngredients_recipesInput
    upsert?: recipesUpsertWithoutIngredients_recipesInput
    connect?: recipesWhereUniqueInput
    update?: XOR<XOR<recipesUpdateToOneWithWhereWithoutIngredients_recipesInput, recipesUpdateWithoutIngredients_recipesInput>, recipesUncheckedUpdateWithoutIngredients_recipesInput>
  }

  export type authors_recipesCreateNestedManyWithoutRecipesInput = {
    create?: XOR<authors_recipesCreateWithoutRecipesInput, authors_recipesUncheckedCreateWithoutRecipesInput> | authors_recipesCreateWithoutRecipesInput[] | authors_recipesUncheckedCreateWithoutRecipesInput[]
    connectOrCreate?: authors_recipesCreateOrConnectWithoutRecipesInput | authors_recipesCreateOrConnectWithoutRecipesInput[]
    createMany?: authors_recipesCreateManyRecipesInputEnvelope
    connect?: authors_recipesWhereUniqueInput | authors_recipesWhereUniqueInput[]
  }

  export type categories_recipesCreateNestedManyWithoutRecipesInput = {
    create?: XOR<categories_recipesCreateWithoutRecipesInput, categories_recipesUncheckedCreateWithoutRecipesInput> | categories_recipesCreateWithoutRecipesInput[] | categories_recipesUncheckedCreateWithoutRecipesInput[]
    connectOrCreate?: categories_recipesCreateOrConnectWithoutRecipesInput | categories_recipesCreateOrConnectWithoutRecipesInput[]
    createMany?: categories_recipesCreateManyRecipesInputEnvelope
    connect?: categories_recipesWhereUniqueInput | categories_recipesWhereUniqueInput[]
  }

  export type ingredients_recipesCreateNestedManyWithoutRecipesInput = {
    create?: XOR<ingredients_recipesCreateWithoutRecipesInput, ingredients_recipesUncheckedCreateWithoutRecipesInput> | ingredients_recipesCreateWithoutRecipesInput[] | ingredients_recipesUncheckedCreateWithoutRecipesInput[]
    connectOrCreate?: ingredients_recipesCreateOrConnectWithoutRecipesInput | ingredients_recipesCreateOrConnectWithoutRecipesInput[]
    createMany?: ingredients_recipesCreateManyRecipesInputEnvelope
    connect?: ingredients_recipesWhereUniqueInput | ingredients_recipesWhereUniqueInput[]
  }

  export type authors_recipesUncheckedCreateNestedManyWithoutRecipesInput = {
    create?: XOR<authors_recipesCreateWithoutRecipesInput, authors_recipesUncheckedCreateWithoutRecipesInput> | authors_recipesCreateWithoutRecipesInput[] | authors_recipesUncheckedCreateWithoutRecipesInput[]
    connectOrCreate?: authors_recipesCreateOrConnectWithoutRecipesInput | authors_recipesCreateOrConnectWithoutRecipesInput[]
    createMany?: authors_recipesCreateManyRecipesInputEnvelope
    connect?: authors_recipesWhereUniqueInput | authors_recipesWhereUniqueInput[]
  }

  export type categories_recipesUncheckedCreateNestedManyWithoutRecipesInput = {
    create?: XOR<categories_recipesCreateWithoutRecipesInput, categories_recipesUncheckedCreateWithoutRecipesInput> | categories_recipesCreateWithoutRecipesInput[] | categories_recipesUncheckedCreateWithoutRecipesInput[]
    connectOrCreate?: categories_recipesCreateOrConnectWithoutRecipesInput | categories_recipesCreateOrConnectWithoutRecipesInput[]
    createMany?: categories_recipesCreateManyRecipesInputEnvelope
    connect?: categories_recipesWhereUniqueInput | categories_recipesWhereUniqueInput[]
  }

  export type ingredients_recipesUncheckedCreateNestedManyWithoutRecipesInput = {
    create?: XOR<ingredients_recipesCreateWithoutRecipesInput, ingredients_recipesUncheckedCreateWithoutRecipesInput> | ingredients_recipesCreateWithoutRecipesInput[] | ingredients_recipesUncheckedCreateWithoutRecipesInput[]
    connectOrCreate?: ingredients_recipesCreateOrConnectWithoutRecipesInput | ingredients_recipesCreateOrConnectWithoutRecipesInput[]
    createMany?: ingredients_recipesCreateManyRecipesInputEnvelope
    connect?: ingredients_recipesWhereUniqueInput | ingredients_recipesWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type authors_recipesUpdateManyWithoutRecipesNestedInput = {
    create?: XOR<authors_recipesCreateWithoutRecipesInput, authors_recipesUncheckedCreateWithoutRecipesInput> | authors_recipesCreateWithoutRecipesInput[] | authors_recipesUncheckedCreateWithoutRecipesInput[]
    connectOrCreate?: authors_recipesCreateOrConnectWithoutRecipesInput | authors_recipesCreateOrConnectWithoutRecipesInput[]
    upsert?: authors_recipesUpsertWithWhereUniqueWithoutRecipesInput | authors_recipesUpsertWithWhereUniqueWithoutRecipesInput[]
    createMany?: authors_recipesCreateManyRecipesInputEnvelope
    set?: authors_recipesWhereUniqueInput | authors_recipesWhereUniqueInput[]
    disconnect?: authors_recipesWhereUniqueInput | authors_recipesWhereUniqueInput[]
    delete?: authors_recipesWhereUniqueInput | authors_recipesWhereUniqueInput[]
    connect?: authors_recipesWhereUniqueInput | authors_recipesWhereUniqueInput[]
    update?: authors_recipesUpdateWithWhereUniqueWithoutRecipesInput | authors_recipesUpdateWithWhereUniqueWithoutRecipesInput[]
    updateMany?: authors_recipesUpdateManyWithWhereWithoutRecipesInput | authors_recipesUpdateManyWithWhereWithoutRecipesInput[]
    deleteMany?: authors_recipesScalarWhereInput | authors_recipesScalarWhereInput[]
  }

  export type categories_recipesUpdateManyWithoutRecipesNestedInput = {
    create?: XOR<categories_recipesCreateWithoutRecipesInput, categories_recipesUncheckedCreateWithoutRecipesInput> | categories_recipesCreateWithoutRecipesInput[] | categories_recipesUncheckedCreateWithoutRecipesInput[]
    connectOrCreate?: categories_recipesCreateOrConnectWithoutRecipesInput | categories_recipesCreateOrConnectWithoutRecipesInput[]
    upsert?: categories_recipesUpsertWithWhereUniqueWithoutRecipesInput | categories_recipesUpsertWithWhereUniqueWithoutRecipesInput[]
    createMany?: categories_recipesCreateManyRecipesInputEnvelope
    set?: categories_recipesWhereUniqueInput | categories_recipesWhereUniqueInput[]
    disconnect?: categories_recipesWhereUniqueInput | categories_recipesWhereUniqueInput[]
    delete?: categories_recipesWhereUniqueInput | categories_recipesWhereUniqueInput[]
    connect?: categories_recipesWhereUniqueInput | categories_recipesWhereUniqueInput[]
    update?: categories_recipesUpdateWithWhereUniqueWithoutRecipesInput | categories_recipesUpdateWithWhereUniqueWithoutRecipesInput[]
    updateMany?: categories_recipesUpdateManyWithWhereWithoutRecipesInput | categories_recipesUpdateManyWithWhereWithoutRecipesInput[]
    deleteMany?: categories_recipesScalarWhereInput | categories_recipesScalarWhereInput[]
  }

  export type ingredients_recipesUpdateManyWithoutRecipesNestedInput = {
    create?: XOR<ingredients_recipesCreateWithoutRecipesInput, ingredients_recipesUncheckedCreateWithoutRecipesInput> | ingredients_recipesCreateWithoutRecipesInput[] | ingredients_recipesUncheckedCreateWithoutRecipesInput[]
    connectOrCreate?: ingredients_recipesCreateOrConnectWithoutRecipesInput | ingredients_recipesCreateOrConnectWithoutRecipesInput[]
    upsert?: ingredients_recipesUpsertWithWhereUniqueWithoutRecipesInput | ingredients_recipesUpsertWithWhereUniqueWithoutRecipesInput[]
    createMany?: ingredients_recipesCreateManyRecipesInputEnvelope
    set?: ingredients_recipesWhereUniqueInput | ingredients_recipesWhereUniqueInput[]
    disconnect?: ingredients_recipesWhereUniqueInput | ingredients_recipesWhereUniqueInput[]
    delete?: ingredients_recipesWhereUniqueInput | ingredients_recipesWhereUniqueInput[]
    connect?: ingredients_recipesWhereUniqueInput | ingredients_recipesWhereUniqueInput[]
    update?: ingredients_recipesUpdateWithWhereUniqueWithoutRecipesInput | ingredients_recipesUpdateWithWhereUniqueWithoutRecipesInput[]
    updateMany?: ingredients_recipesUpdateManyWithWhereWithoutRecipesInput | ingredients_recipesUpdateManyWithWhereWithoutRecipesInput[]
    deleteMany?: ingredients_recipesScalarWhereInput | ingredients_recipesScalarWhereInput[]
  }

  export type authors_recipesUncheckedUpdateManyWithoutRecipesNestedInput = {
    create?: XOR<authors_recipesCreateWithoutRecipesInput, authors_recipesUncheckedCreateWithoutRecipesInput> | authors_recipesCreateWithoutRecipesInput[] | authors_recipesUncheckedCreateWithoutRecipesInput[]
    connectOrCreate?: authors_recipesCreateOrConnectWithoutRecipesInput | authors_recipesCreateOrConnectWithoutRecipesInput[]
    upsert?: authors_recipesUpsertWithWhereUniqueWithoutRecipesInput | authors_recipesUpsertWithWhereUniqueWithoutRecipesInput[]
    createMany?: authors_recipesCreateManyRecipesInputEnvelope
    set?: authors_recipesWhereUniqueInput | authors_recipesWhereUniqueInput[]
    disconnect?: authors_recipesWhereUniqueInput | authors_recipesWhereUniqueInput[]
    delete?: authors_recipesWhereUniqueInput | authors_recipesWhereUniqueInput[]
    connect?: authors_recipesWhereUniqueInput | authors_recipesWhereUniqueInput[]
    update?: authors_recipesUpdateWithWhereUniqueWithoutRecipesInput | authors_recipesUpdateWithWhereUniqueWithoutRecipesInput[]
    updateMany?: authors_recipesUpdateManyWithWhereWithoutRecipesInput | authors_recipesUpdateManyWithWhereWithoutRecipesInput[]
    deleteMany?: authors_recipesScalarWhereInput | authors_recipesScalarWhereInput[]
  }

  export type categories_recipesUncheckedUpdateManyWithoutRecipesNestedInput = {
    create?: XOR<categories_recipesCreateWithoutRecipesInput, categories_recipesUncheckedCreateWithoutRecipesInput> | categories_recipesCreateWithoutRecipesInput[] | categories_recipesUncheckedCreateWithoutRecipesInput[]
    connectOrCreate?: categories_recipesCreateOrConnectWithoutRecipesInput | categories_recipesCreateOrConnectWithoutRecipesInput[]
    upsert?: categories_recipesUpsertWithWhereUniqueWithoutRecipesInput | categories_recipesUpsertWithWhereUniqueWithoutRecipesInput[]
    createMany?: categories_recipesCreateManyRecipesInputEnvelope
    set?: categories_recipesWhereUniqueInput | categories_recipesWhereUniqueInput[]
    disconnect?: categories_recipesWhereUniqueInput | categories_recipesWhereUniqueInput[]
    delete?: categories_recipesWhereUniqueInput | categories_recipesWhereUniqueInput[]
    connect?: categories_recipesWhereUniqueInput | categories_recipesWhereUniqueInput[]
    update?: categories_recipesUpdateWithWhereUniqueWithoutRecipesInput | categories_recipesUpdateWithWhereUniqueWithoutRecipesInput[]
    updateMany?: categories_recipesUpdateManyWithWhereWithoutRecipesInput | categories_recipesUpdateManyWithWhereWithoutRecipesInput[]
    deleteMany?: categories_recipesScalarWhereInput | categories_recipesScalarWhereInput[]
  }

  export type ingredients_recipesUncheckedUpdateManyWithoutRecipesNestedInput = {
    create?: XOR<ingredients_recipesCreateWithoutRecipesInput, ingredients_recipesUncheckedCreateWithoutRecipesInput> | ingredients_recipesCreateWithoutRecipesInput[] | ingredients_recipesUncheckedCreateWithoutRecipesInput[]
    connectOrCreate?: ingredients_recipesCreateOrConnectWithoutRecipesInput | ingredients_recipesCreateOrConnectWithoutRecipesInput[]
    upsert?: ingredients_recipesUpsertWithWhereUniqueWithoutRecipesInput | ingredients_recipesUpsertWithWhereUniqueWithoutRecipesInput[]
    createMany?: ingredients_recipesCreateManyRecipesInputEnvelope
    set?: ingredients_recipesWhereUniqueInput | ingredients_recipesWhereUniqueInput[]
    disconnect?: ingredients_recipesWhereUniqueInput | ingredients_recipesWhereUniqueInput[]
    delete?: ingredients_recipesWhereUniqueInput | ingredients_recipesWhereUniqueInput[]
    connect?: ingredients_recipesWhereUniqueInput | ingredients_recipesWhereUniqueInput[]
    update?: ingredients_recipesUpdateWithWhereUniqueWithoutRecipesInput | ingredients_recipesUpdateWithWhereUniqueWithoutRecipesInput[]
    updateMany?: ingredients_recipesUpdateManyWithWhereWithoutRecipesInput | ingredients_recipesUpdateManyWithWhereWithoutRecipesInput[]
    deleteMany?: ingredients_recipesScalarWhereInput | ingredients_recipesScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type authors_recipesCreateWithoutAuthorsInput = {
    recipes: recipesCreateNestedOneWithoutAuthors_recipesInput
  }

  export type authors_recipesUncheckedCreateWithoutAuthorsInput = {
    id?: number
    recipe_id: number
  }

  export type authors_recipesCreateOrConnectWithoutAuthorsInput = {
    where: authors_recipesWhereUniqueInput
    create: XOR<authors_recipesCreateWithoutAuthorsInput, authors_recipesUncheckedCreateWithoutAuthorsInput>
  }

  export type authors_recipesCreateManyAuthorsInputEnvelope = {
    data: authors_recipesCreateManyAuthorsInput | authors_recipesCreateManyAuthorsInput[]
    skipDuplicates?: boolean
  }

  export type authors_recipesUpsertWithWhereUniqueWithoutAuthorsInput = {
    where: authors_recipesWhereUniqueInput
    update: XOR<authors_recipesUpdateWithoutAuthorsInput, authors_recipesUncheckedUpdateWithoutAuthorsInput>
    create: XOR<authors_recipesCreateWithoutAuthorsInput, authors_recipesUncheckedCreateWithoutAuthorsInput>
  }

  export type authors_recipesUpdateWithWhereUniqueWithoutAuthorsInput = {
    where: authors_recipesWhereUniqueInput
    data: XOR<authors_recipesUpdateWithoutAuthorsInput, authors_recipesUncheckedUpdateWithoutAuthorsInput>
  }

  export type authors_recipesUpdateManyWithWhereWithoutAuthorsInput = {
    where: authors_recipesScalarWhereInput
    data: XOR<authors_recipesUpdateManyMutationInput, authors_recipesUncheckedUpdateManyWithoutAuthorsInput>
  }

  export type authors_recipesScalarWhereInput = {
    AND?: authors_recipesScalarWhereInput | authors_recipesScalarWhereInput[]
    OR?: authors_recipesScalarWhereInput[]
    NOT?: authors_recipesScalarWhereInput | authors_recipesScalarWhereInput[]
    id?: IntFilter<"authors_recipes"> | number
    author_id?: IntFilter<"authors_recipes"> | number
    recipe_id?: IntFilter<"authors_recipes"> | number
  }

  export type authorsCreateWithoutAuthors_recipesInput = {
    name: string
  }

  export type authorsUncheckedCreateWithoutAuthors_recipesInput = {
    id?: number
    name: string
  }

  export type authorsCreateOrConnectWithoutAuthors_recipesInput = {
    where: authorsWhereUniqueInput
    create: XOR<authorsCreateWithoutAuthors_recipesInput, authorsUncheckedCreateWithoutAuthors_recipesInput>
  }

  export type recipesCreateWithoutAuthors_recipesInput = {
    name?: string | null
    url: string
    image_url?: string | null
    last_mod?: Date | string | null
    categories_recipes?: categories_recipesCreateNestedManyWithoutRecipesInput
    ingredients_recipes?: ingredients_recipesCreateNestedManyWithoutRecipesInput
  }

  export type recipesUncheckedCreateWithoutAuthors_recipesInput = {
    id?: number
    name?: string | null
    url: string
    image_url?: string | null
    last_mod?: Date | string | null
    categories_recipes?: categories_recipesUncheckedCreateNestedManyWithoutRecipesInput
    ingredients_recipes?: ingredients_recipesUncheckedCreateNestedManyWithoutRecipesInput
  }

  export type recipesCreateOrConnectWithoutAuthors_recipesInput = {
    where: recipesWhereUniqueInput
    create: XOR<recipesCreateWithoutAuthors_recipesInput, recipesUncheckedCreateWithoutAuthors_recipesInput>
  }

  export type authorsUpsertWithoutAuthors_recipesInput = {
    update: XOR<authorsUpdateWithoutAuthors_recipesInput, authorsUncheckedUpdateWithoutAuthors_recipesInput>
    create: XOR<authorsCreateWithoutAuthors_recipesInput, authorsUncheckedCreateWithoutAuthors_recipesInput>
    where?: authorsWhereInput
  }

  export type authorsUpdateToOneWithWhereWithoutAuthors_recipesInput = {
    where?: authorsWhereInput
    data: XOR<authorsUpdateWithoutAuthors_recipesInput, authorsUncheckedUpdateWithoutAuthors_recipesInput>
  }

  export type authorsUpdateWithoutAuthors_recipesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type authorsUncheckedUpdateWithoutAuthors_recipesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type recipesUpsertWithoutAuthors_recipesInput = {
    update: XOR<recipesUpdateWithoutAuthors_recipesInput, recipesUncheckedUpdateWithoutAuthors_recipesInput>
    create: XOR<recipesCreateWithoutAuthors_recipesInput, recipesUncheckedCreateWithoutAuthors_recipesInput>
    where?: recipesWhereInput
  }

  export type recipesUpdateToOneWithWhereWithoutAuthors_recipesInput = {
    where?: recipesWhereInput
    data: XOR<recipesUpdateWithoutAuthors_recipesInput, recipesUncheckedUpdateWithoutAuthors_recipesInput>
  }

  export type recipesUpdateWithoutAuthors_recipesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_mod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categories_recipes?: categories_recipesUpdateManyWithoutRecipesNestedInput
    ingredients_recipes?: ingredients_recipesUpdateManyWithoutRecipesNestedInput
  }

  export type recipesUncheckedUpdateWithoutAuthors_recipesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_mod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categories_recipes?: categories_recipesUncheckedUpdateManyWithoutRecipesNestedInput
    ingredients_recipes?: ingredients_recipesUncheckedUpdateManyWithoutRecipesNestedInput
  }

  export type categories_recipesCreateWithoutCategoriesInput = {
    recipes: recipesCreateNestedOneWithoutCategories_recipesInput
  }

  export type categories_recipesUncheckedCreateWithoutCategoriesInput = {
    id?: number
    recipe_id: number
  }

  export type categories_recipesCreateOrConnectWithoutCategoriesInput = {
    where: categories_recipesWhereUniqueInput
    create: XOR<categories_recipesCreateWithoutCategoriesInput, categories_recipesUncheckedCreateWithoutCategoriesInput>
  }

  export type categories_recipesCreateManyCategoriesInputEnvelope = {
    data: categories_recipesCreateManyCategoriesInput | categories_recipesCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type categories_recipesUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: categories_recipesWhereUniqueInput
    update: XOR<categories_recipesUpdateWithoutCategoriesInput, categories_recipesUncheckedUpdateWithoutCategoriesInput>
    create: XOR<categories_recipesCreateWithoutCategoriesInput, categories_recipesUncheckedCreateWithoutCategoriesInput>
  }

  export type categories_recipesUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: categories_recipesWhereUniqueInput
    data: XOR<categories_recipesUpdateWithoutCategoriesInput, categories_recipesUncheckedUpdateWithoutCategoriesInput>
  }

  export type categories_recipesUpdateManyWithWhereWithoutCategoriesInput = {
    where: categories_recipesScalarWhereInput
    data: XOR<categories_recipesUpdateManyMutationInput, categories_recipesUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type categories_recipesScalarWhereInput = {
    AND?: categories_recipesScalarWhereInput | categories_recipesScalarWhereInput[]
    OR?: categories_recipesScalarWhereInput[]
    NOT?: categories_recipesScalarWhereInput | categories_recipesScalarWhereInput[]
    id?: IntFilter<"categories_recipes"> | number
    category_id?: IntFilter<"categories_recipes"> | number
    recipe_id?: IntFilter<"categories_recipes"> | number
  }

  export type categoriesCreateWithoutCategories_recipesInput = {
    name: string
  }

  export type categoriesUncheckedCreateWithoutCategories_recipesInput = {
    id?: number
    name: string
  }

  export type categoriesCreateOrConnectWithoutCategories_recipesInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutCategories_recipesInput, categoriesUncheckedCreateWithoutCategories_recipesInput>
  }

  export type recipesCreateWithoutCategories_recipesInput = {
    name?: string | null
    url: string
    image_url?: string | null
    last_mod?: Date | string | null
    authors_recipes?: authors_recipesCreateNestedManyWithoutRecipesInput
    ingredients_recipes?: ingredients_recipesCreateNestedManyWithoutRecipesInput
  }

  export type recipesUncheckedCreateWithoutCategories_recipesInput = {
    id?: number
    name?: string | null
    url: string
    image_url?: string | null
    last_mod?: Date | string | null
    authors_recipes?: authors_recipesUncheckedCreateNestedManyWithoutRecipesInput
    ingredients_recipes?: ingredients_recipesUncheckedCreateNestedManyWithoutRecipesInput
  }

  export type recipesCreateOrConnectWithoutCategories_recipesInput = {
    where: recipesWhereUniqueInput
    create: XOR<recipesCreateWithoutCategories_recipesInput, recipesUncheckedCreateWithoutCategories_recipesInput>
  }

  export type categoriesUpsertWithoutCategories_recipesInput = {
    update: XOR<categoriesUpdateWithoutCategories_recipesInput, categoriesUncheckedUpdateWithoutCategories_recipesInput>
    create: XOR<categoriesCreateWithoutCategories_recipesInput, categoriesUncheckedCreateWithoutCategories_recipesInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutCategories_recipesInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutCategories_recipesInput, categoriesUncheckedUpdateWithoutCategories_recipesInput>
  }

  export type categoriesUpdateWithoutCategories_recipesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type categoriesUncheckedUpdateWithoutCategories_recipesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type recipesUpsertWithoutCategories_recipesInput = {
    update: XOR<recipesUpdateWithoutCategories_recipesInput, recipesUncheckedUpdateWithoutCategories_recipesInput>
    create: XOR<recipesCreateWithoutCategories_recipesInput, recipesUncheckedCreateWithoutCategories_recipesInput>
    where?: recipesWhereInput
  }

  export type recipesUpdateToOneWithWhereWithoutCategories_recipesInput = {
    where?: recipesWhereInput
    data: XOR<recipesUpdateWithoutCategories_recipesInput, recipesUncheckedUpdateWithoutCategories_recipesInput>
  }

  export type recipesUpdateWithoutCategories_recipesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_mod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authors_recipes?: authors_recipesUpdateManyWithoutRecipesNestedInput
    ingredients_recipes?: ingredients_recipesUpdateManyWithoutRecipesNestedInput
  }

  export type recipesUncheckedUpdateWithoutCategories_recipesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_mod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authors_recipes?: authors_recipesUncheckedUpdateManyWithoutRecipesNestedInput
    ingredients_recipes?: ingredients_recipesUncheckedUpdateManyWithoutRecipesNestedInput
  }

  export type ingredients_recipesCreateWithoutIngredientsInput = {
    full_text?: string | null
    recipes: recipesCreateNestedOneWithoutIngredients_recipesInput
  }

  export type ingredients_recipesUncheckedCreateWithoutIngredientsInput = {
    id?: number
    recipe_id: number
    full_text?: string | null
  }

  export type ingredients_recipesCreateOrConnectWithoutIngredientsInput = {
    where: ingredients_recipesWhereUniqueInput
    create: XOR<ingredients_recipesCreateWithoutIngredientsInput, ingredients_recipesUncheckedCreateWithoutIngredientsInput>
  }

  export type ingredients_recipesCreateManyIngredientsInputEnvelope = {
    data: ingredients_recipesCreateManyIngredientsInput | ingredients_recipesCreateManyIngredientsInput[]
    skipDuplicates?: boolean
  }

  export type ingredients_recipesUpsertWithWhereUniqueWithoutIngredientsInput = {
    where: ingredients_recipesWhereUniqueInput
    update: XOR<ingredients_recipesUpdateWithoutIngredientsInput, ingredients_recipesUncheckedUpdateWithoutIngredientsInput>
    create: XOR<ingredients_recipesCreateWithoutIngredientsInput, ingredients_recipesUncheckedCreateWithoutIngredientsInput>
  }

  export type ingredients_recipesUpdateWithWhereUniqueWithoutIngredientsInput = {
    where: ingredients_recipesWhereUniqueInput
    data: XOR<ingredients_recipesUpdateWithoutIngredientsInput, ingredients_recipesUncheckedUpdateWithoutIngredientsInput>
  }

  export type ingredients_recipesUpdateManyWithWhereWithoutIngredientsInput = {
    where: ingredients_recipesScalarWhereInput
    data: XOR<ingredients_recipesUpdateManyMutationInput, ingredients_recipesUncheckedUpdateManyWithoutIngredientsInput>
  }

  export type ingredients_recipesScalarWhereInput = {
    AND?: ingredients_recipesScalarWhereInput | ingredients_recipesScalarWhereInput[]
    OR?: ingredients_recipesScalarWhereInput[]
    NOT?: ingredients_recipesScalarWhereInput | ingredients_recipesScalarWhereInput[]
    id?: IntFilter<"ingredients_recipes"> | number
    ingredient_id?: IntFilter<"ingredients_recipes"> | number
    recipe_id?: IntFilter<"ingredients_recipes"> | number
    full_text?: StringNullableFilter<"ingredients_recipes"> | string | null
  }

  export type ingredientsCreateWithoutIngredients_recipesInput = {
    name: string
  }

  export type ingredientsUncheckedCreateWithoutIngredients_recipesInput = {
    id?: number
    name: string
  }

  export type ingredientsCreateOrConnectWithoutIngredients_recipesInput = {
    where: ingredientsWhereUniqueInput
    create: XOR<ingredientsCreateWithoutIngredients_recipesInput, ingredientsUncheckedCreateWithoutIngredients_recipesInput>
  }

  export type recipesCreateWithoutIngredients_recipesInput = {
    name?: string | null
    url: string
    image_url?: string | null
    last_mod?: Date | string | null
    authors_recipes?: authors_recipesCreateNestedManyWithoutRecipesInput
    categories_recipes?: categories_recipesCreateNestedManyWithoutRecipesInput
  }

  export type recipesUncheckedCreateWithoutIngredients_recipesInput = {
    id?: number
    name?: string | null
    url: string
    image_url?: string | null
    last_mod?: Date | string | null
    authors_recipes?: authors_recipesUncheckedCreateNestedManyWithoutRecipesInput
    categories_recipes?: categories_recipesUncheckedCreateNestedManyWithoutRecipesInput
  }

  export type recipesCreateOrConnectWithoutIngredients_recipesInput = {
    where: recipesWhereUniqueInput
    create: XOR<recipesCreateWithoutIngredients_recipesInput, recipesUncheckedCreateWithoutIngredients_recipesInput>
  }

  export type ingredientsUpsertWithoutIngredients_recipesInput = {
    update: XOR<ingredientsUpdateWithoutIngredients_recipesInput, ingredientsUncheckedUpdateWithoutIngredients_recipesInput>
    create: XOR<ingredientsCreateWithoutIngredients_recipesInput, ingredientsUncheckedCreateWithoutIngredients_recipesInput>
    where?: ingredientsWhereInput
  }

  export type ingredientsUpdateToOneWithWhereWithoutIngredients_recipesInput = {
    where?: ingredientsWhereInput
    data: XOR<ingredientsUpdateWithoutIngredients_recipesInput, ingredientsUncheckedUpdateWithoutIngredients_recipesInput>
  }

  export type ingredientsUpdateWithoutIngredients_recipesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ingredientsUncheckedUpdateWithoutIngredients_recipesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type recipesUpsertWithoutIngredients_recipesInput = {
    update: XOR<recipesUpdateWithoutIngredients_recipesInput, recipesUncheckedUpdateWithoutIngredients_recipesInput>
    create: XOR<recipesCreateWithoutIngredients_recipesInput, recipesUncheckedCreateWithoutIngredients_recipesInput>
    where?: recipesWhereInput
  }

  export type recipesUpdateToOneWithWhereWithoutIngredients_recipesInput = {
    where?: recipesWhereInput
    data: XOR<recipesUpdateWithoutIngredients_recipesInput, recipesUncheckedUpdateWithoutIngredients_recipesInput>
  }

  export type recipesUpdateWithoutIngredients_recipesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_mod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authors_recipes?: authors_recipesUpdateManyWithoutRecipesNestedInput
    categories_recipes?: categories_recipesUpdateManyWithoutRecipesNestedInput
  }

  export type recipesUncheckedUpdateWithoutIngredients_recipesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_mod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authors_recipes?: authors_recipesUncheckedUpdateManyWithoutRecipesNestedInput
    categories_recipes?: categories_recipesUncheckedUpdateManyWithoutRecipesNestedInput
  }

  export type authors_recipesCreateWithoutRecipesInput = {
    authors: authorsCreateNestedOneWithoutAuthors_recipesInput
  }

  export type authors_recipesUncheckedCreateWithoutRecipesInput = {
    id?: number
    author_id: number
  }

  export type authors_recipesCreateOrConnectWithoutRecipesInput = {
    where: authors_recipesWhereUniqueInput
    create: XOR<authors_recipesCreateWithoutRecipesInput, authors_recipesUncheckedCreateWithoutRecipesInput>
  }

  export type authors_recipesCreateManyRecipesInputEnvelope = {
    data: authors_recipesCreateManyRecipesInput | authors_recipesCreateManyRecipesInput[]
    skipDuplicates?: boolean
  }

  export type categories_recipesCreateWithoutRecipesInput = {
    categories: categoriesCreateNestedOneWithoutCategories_recipesInput
  }

  export type categories_recipesUncheckedCreateWithoutRecipesInput = {
    id?: number
    category_id: number
  }

  export type categories_recipesCreateOrConnectWithoutRecipesInput = {
    where: categories_recipesWhereUniqueInput
    create: XOR<categories_recipesCreateWithoutRecipesInput, categories_recipesUncheckedCreateWithoutRecipesInput>
  }

  export type categories_recipesCreateManyRecipesInputEnvelope = {
    data: categories_recipesCreateManyRecipesInput | categories_recipesCreateManyRecipesInput[]
    skipDuplicates?: boolean
  }

  export type ingredients_recipesCreateWithoutRecipesInput = {
    full_text?: string | null
    ingredients: ingredientsCreateNestedOneWithoutIngredients_recipesInput
  }

  export type ingredients_recipesUncheckedCreateWithoutRecipesInput = {
    id?: number
    ingredient_id: number
    full_text?: string | null
  }

  export type ingredients_recipesCreateOrConnectWithoutRecipesInput = {
    where: ingredients_recipesWhereUniqueInput
    create: XOR<ingredients_recipesCreateWithoutRecipesInput, ingredients_recipesUncheckedCreateWithoutRecipesInput>
  }

  export type ingredients_recipesCreateManyRecipesInputEnvelope = {
    data: ingredients_recipesCreateManyRecipesInput | ingredients_recipesCreateManyRecipesInput[]
    skipDuplicates?: boolean
  }

  export type authors_recipesUpsertWithWhereUniqueWithoutRecipesInput = {
    where: authors_recipesWhereUniqueInput
    update: XOR<authors_recipesUpdateWithoutRecipesInput, authors_recipesUncheckedUpdateWithoutRecipesInput>
    create: XOR<authors_recipesCreateWithoutRecipesInput, authors_recipesUncheckedCreateWithoutRecipesInput>
  }

  export type authors_recipesUpdateWithWhereUniqueWithoutRecipesInput = {
    where: authors_recipesWhereUniqueInput
    data: XOR<authors_recipesUpdateWithoutRecipesInput, authors_recipesUncheckedUpdateWithoutRecipesInput>
  }

  export type authors_recipesUpdateManyWithWhereWithoutRecipesInput = {
    where: authors_recipesScalarWhereInput
    data: XOR<authors_recipesUpdateManyMutationInput, authors_recipesUncheckedUpdateManyWithoutRecipesInput>
  }

  export type categories_recipesUpsertWithWhereUniqueWithoutRecipesInput = {
    where: categories_recipesWhereUniqueInput
    update: XOR<categories_recipesUpdateWithoutRecipesInput, categories_recipesUncheckedUpdateWithoutRecipesInput>
    create: XOR<categories_recipesCreateWithoutRecipesInput, categories_recipesUncheckedCreateWithoutRecipesInput>
  }

  export type categories_recipesUpdateWithWhereUniqueWithoutRecipesInput = {
    where: categories_recipesWhereUniqueInput
    data: XOR<categories_recipesUpdateWithoutRecipesInput, categories_recipesUncheckedUpdateWithoutRecipesInput>
  }

  export type categories_recipesUpdateManyWithWhereWithoutRecipesInput = {
    where: categories_recipesScalarWhereInput
    data: XOR<categories_recipesUpdateManyMutationInput, categories_recipesUncheckedUpdateManyWithoutRecipesInput>
  }

  export type ingredients_recipesUpsertWithWhereUniqueWithoutRecipesInput = {
    where: ingredients_recipesWhereUniqueInput
    update: XOR<ingredients_recipesUpdateWithoutRecipesInput, ingredients_recipesUncheckedUpdateWithoutRecipesInput>
    create: XOR<ingredients_recipesCreateWithoutRecipesInput, ingredients_recipesUncheckedCreateWithoutRecipesInput>
  }

  export type ingredients_recipesUpdateWithWhereUniqueWithoutRecipesInput = {
    where: ingredients_recipesWhereUniqueInput
    data: XOR<ingredients_recipesUpdateWithoutRecipesInput, ingredients_recipesUncheckedUpdateWithoutRecipesInput>
  }

  export type ingredients_recipesUpdateManyWithWhereWithoutRecipesInput = {
    where: ingredients_recipesScalarWhereInput
    data: XOR<ingredients_recipesUpdateManyMutationInput, ingredients_recipesUncheckedUpdateManyWithoutRecipesInput>
  }

  export type authors_recipesCreateManyAuthorsInput = {
    id?: number
    recipe_id: number
  }

  export type authors_recipesUpdateWithoutAuthorsInput = {
    recipes?: recipesUpdateOneRequiredWithoutAuthors_recipesNestedInput
  }

  export type authors_recipesUncheckedUpdateWithoutAuthorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipe_id?: IntFieldUpdateOperationsInput | number
  }

  export type authors_recipesUncheckedUpdateManyWithoutAuthorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipe_id?: IntFieldUpdateOperationsInput | number
  }

  export type categories_recipesCreateManyCategoriesInput = {
    id?: number
    recipe_id: number
  }

  export type categories_recipesUpdateWithoutCategoriesInput = {
    recipes?: recipesUpdateOneRequiredWithoutCategories_recipesNestedInput
  }

  export type categories_recipesUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipe_id?: IntFieldUpdateOperationsInput | number
  }

  export type categories_recipesUncheckedUpdateManyWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipe_id?: IntFieldUpdateOperationsInput | number
  }

  export type ingredients_recipesCreateManyIngredientsInput = {
    id?: number
    recipe_id: number
    full_text?: string | null
  }

  export type ingredients_recipesUpdateWithoutIngredientsInput = {
    full_text?: NullableStringFieldUpdateOperationsInput | string | null
    recipes?: recipesUpdateOneRequiredWithoutIngredients_recipesNestedInput
  }

  export type ingredients_recipesUncheckedUpdateWithoutIngredientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipe_id?: IntFieldUpdateOperationsInput | number
    full_text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ingredients_recipesUncheckedUpdateManyWithoutIngredientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipe_id?: IntFieldUpdateOperationsInput | number
    full_text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type authors_recipesCreateManyRecipesInput = {
    id?: number
    author_id: number
  }

  export type categories_recipesCreateManyRecipesInput = {
    id?: number
    category_id: number
  }

  export type ingredients_recipesCreateManyRecipesInput = {
    id?: number
    ingredient_id: number
    full_text?: string | null
  }

  export type authors_recipesUpdateWithoutRecipesInput = {
    authors?: authorsUpdateOneRequiredWithoutAuthors_recipesNestedInput
  }

  export type authors_recipesUncheckedUpdateWithoutRecipesInput = {
    id?: IntFieldUpdateOperationsInput | number
    author_id?: IntFieldUpdateOperationsInput | number
  }

  export type authors_recipesUncheckedUpdateManyWithoutRecipesInput = {
    id?: IntFieldUpdateOperationsInput | number
    author_id?: IntFieldUpdateOperationsInput | number
  }

  export type categories_recipesUpdateWithoutRecipesInput = {
    categories?: categoriesUpdateOneRequiredWithoutCategories_recipesNestedInput
  }

  export type categories_recipesUncheckedUpdateWithoutRecipesInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type categories_recipesUncheckedUpdateManyWithoutRecipesInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type ingredients_recipesUpdateWithoutRecipesInput = {
    full_text?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: ingredientsUpdateOneRequiredWithoutIngredients_recipesNestedInput
  }

  export type ingredients_recipesUncheckedUpdateWithoutRecipesInput = {
    id?: IntFieldUpdateOperationsInput | number
    ingredient_id?: IntFieldUpdateOperationsInput | number
    full_text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ingredients_recipesUncheckedUpdateManyWithoutRecipesInput = {
    id?: IntFieldUpdateOperationsInput | number
    ingredient_id?: IntFieldUpdateOperationsInput | number
    full_text?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}