
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model MedicalRecord
 * 
 */
export type MedicalRecord = $Result.DefaultSelection<Prisma.$MedicalRecordPayload>
/**
 * Model EducationHistory
 * 
 */
export type EducationHistory = $Result.DefaultSelection<Prisma.$EducationHistoryPayload>
/**
 * Model EmploymentHistory
 * 
 */
export type EmploymentHistory = $Result.DefaultSelection<Prisma.$EmploymentHistoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Patients
 * const patients = await prisma.patient.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Patients
   * const patients = await prisma.patient.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicalRecord`: Exposes CRUD operations for the **MedicalRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicalRecords
    * const medicalRecords = await prisma.medicalRecord.findMany()
    * ```
    */
  get medicalRecord(): Prisma.MedicalRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.educationHistory`: Exposes CRUD operations for the **EducationHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EducationHistories
    * const educationHistories = await prisma.educationHistory.findMany()
    * ```
    */
  get educationHistory(): Prisma.EducationHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employmentHistory`: Exposes CRUD operations for the **EmploymentHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmploymentHistories
    * const employmentHistories = await prisma.employmentHistory.findMany()
    * ```
    */
  get employmentHistory(): Prisma.EmploymentHistoryDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.3.1
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Patient: 'Patient',
    MedicalRecord: 'MedicalRecord',
    EducationHistory: 'EducationHistory',
    EmploymentHistory: 'EmploymentHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "patient" | "medicalRecord" | "educationHistory" | "employmentHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      MedicalRecord: {
        payload: Prisma.$MedicalRecordPayload<ExtArgs>
        fields: Prisma.MedicalRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicalRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicalRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          findFirst: {
            args: Prisma.MedicalRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicalRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          findMany: {
            args: Prisma.MedicalRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>[]
          }
          create: {
            args: Prisma.MedicalRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          createMany: {
            args: Prisma.MedicalRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicalRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>[]
          }
          delete: {
            args: Prisma.MedicalRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          update: {
            args: Prisma.MedicalRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          deleteMany: {
            args: Prisma.MedicalRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicalRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicalRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>[]
          }
          upsert: {
            args: Prisma.MedicalRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          aggregate: {
            args: Prisma.MedicalRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicalRecord>
          }
          groupBy: {
            args: Prisma.MedicalRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicalRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicalRecordCountArgs<ExtArgs>
            result: $Utils.Optional<MedicalRecordCountAggregateOutputType> | number
          }
        }
      }
      EducationHistory: {
        payload: Prisma.$EducationHistoryPayload<ExtArgs>
        fields: Prisma.EducationHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EducationHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EducationHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationHistoryPayload>
          }
          findFirst: {
            args: Prisma.EducationHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EducationHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationHistoryPayload>
          }
          findMany: {
            args: Prisma.EducationHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationHistoryPayload>[]
          }
          create: {
            args: Prisma.EducationHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationHistoryPayload>
          }
          createMany: {
            args: Prisma.EducationHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EducationHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationHistoryPayload>[]
          }
          delete: {
            args: Prisma.EducationHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationHistoryPayload>
          }
          update: {
            args: Prisma.EducationHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationHistoryPayload>
          }
          deleteMany: {
            args: Prisma.EducationHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EducationHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EducationHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationHistoryPayload>[]
          }
          upsert: {
            args: Prisma.EducationHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationHistoryPayload>
          }
          aggregate: {
            args: Prisma.EducationHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEducationHistory>
          }
          groupBy: {
            args: Prisma.EducationHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<EducationHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.EducationHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<EducationHistoryCountAggregateOutputType> | number
          }
        }
      }
      EmploymentHistory: {
        payload: Prisma.$EmploymentHistoryPayload<ExtArgs>
        fields: Prisma.EmploymentHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmploymentHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmploymentHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmploymentHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmploymentHistoryPayload>
          }
          findFirst: {
            args: Prisma.EmploymentHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmploymentHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmploymentHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmploymentHistoryPayload>
          }
          findMany: {
            args: Prisma.EmploymentHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmploymentHistoryPayload>[]
          }
          create: {
            args: Prisma.EmploymentHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmploymentHistoryPayload>
          }
          createMany: {
            args: Prisma.EmploymentHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmploymentHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmploymentHistoryPayload>[]
          }
          delete: {
            args: Prisma.EmploymentHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmploymentHistoryPayload>
          }
          update: {
            args: Prisma.EmploymentHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmploymentHistoryPayload>
          }
          deleteMany: {
            args: Prisma.EmploymentHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmploymentHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmploymentHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmploymentHistoryPayload>[]
          }
          upsert: {
            args: Prisma.EmploymentHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmploymentHistoryPayload>
          }
          aggregate: {
            args: Prisma.EmploymentHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmploymentHistory>
          }
          groupBy: {
            args: Prisma.EmploymentHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmploymentHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmploymentHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<EmploymentHistoryCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    patient?: PatientOmit
    medicalRecord?: MedicalRecordOmit
    educationHistory?: EducationHistoryOmit
    employmentHistory?: EmploymentHistoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    medicalRecords: number
    educationHistory: number
    employmentHistory: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicalRecords?: boolean | PatientCountOutputTypeCountMedicalRecordsArgs
    educationHistory?: boolean | PatientCountOutputTypeCountEducationHistoryArgs
    employmentHistory?: boolean | PatientCountOutputTypeCountEmploymentHistoryArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountMedicalRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalRecordWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountEducationHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationHistoryWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountEmploymentHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmploymentHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientMinAggregateOutputType = {
    patient_id: string | null
    owner_id: string | null
    first_name: string | null
    middle_name: string | null
    last_name: string | null
    date_of_birth: Date | null
    gender: string | null
    nationality: string | null
    ethnicity: string | null
    place_of_birth: string | null
    id_type: string | null
    government_id: string | null
    contact_phone: string | null
    contact_email: string | null
    address_line1: string | null
    address_line2: string | null
    city: string | null
    parish: string | null
    postal_code: string | null
    country: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PatientMaxAggregateOutputType = {
    patient_id: string | null
    owner_id: string | null
    first_name: string | null
    middle_name: string | null
    last_name: string | null
    date_of_birth: Date | null
    gender: string | null
    nationality: string | null
    ethnicity: string | null
    place_of_birth: string | null
    id_type: string | null
    government_id: string | null
    contact_phone: string | null
    contact_email: string | null
    address_line1: string | null
    address_line2: string | null
    city: string | null
    parish: string | null
    postal_code: string | null
    country: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PatientCountAggregateOutputType = {
    patient_id: number
    owner_id: number
    first_name: number
    middle_name: number
    last_name: number
    date_of_birth: number
    gender: number
    nationality: number
    ethnicity: number
    place_of_birth: number
    id_type: number
    government_id: number
    contact_phone: number
    contact_email: number
    address_line1: number
    address_line2: number
    city: number
    parish: number
    postal_code: number
    country: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PatientMinAggregateInputType = {
    patient_id?: true
    owner_id?: true
    first_name?: true
    middle_name?: true
    last_name?: true
    date_of_birth?: true
    gender?: true
    nationality?: true
    ethnicity?: true
    place_of_birth?: true
    id_type?: true
    government_id?: true
    contact_phone?: true
    contact_email?: true
    address_line1?: true
    address_line2?: true
    city?: true
    parish?: true
    postal_code?: true
    country?: true
    created_at?: true
    updated_at?: true
  }

  export type PatientMaxAggregateInputType = {
    patient_id?: true
    owner_id?: true
    first_name?: true
    middle_name?: true
    last_name?: true
    date_of_birth?: true
    gender?: true
    nationality?: true
    ethnicity?: true
    place_of_birth?: true
    id_type?: true
    government_id?: true
    contact_phone?: true
    contact_email?: true
    address_line1?: true
    address_line2?: true
    city?: true
    parish?: true
    postal_code?: true
    country?: true
    created_at?: true
    updated_at?: true
  }

  export type PatientCountAggregateInputType = {
    patient_id?: true
    owner_id?: true
    first_name?: true
    middle_name?: true
    last_name?: true
    date_of_birth?: true
    gender?: true
    nationality?: true
    ethnicity?: true
    place_of_birth?: true
    id_type?: true
    government_id?: true
    contact_phone?: true
    contact_email?: true
    address_line1?: true
    address_line2?: true
    city?: true
    parish?: true
    postal_code?: true
    country?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    patient_id: string
    owner_id: string
    first_name: string
    middle_name: string | null
    last_name: string
    date_of_birth: Date
    gender: string
    nationality: string
    ethnicity: string | null
    place_of_birth: string
    id_type: string
    government_id: string
    contact_phone: string | null
    contact_email: string | null
    address_line1: string
    address_line2: string | null
    city: string
    parish: string
    postal_code: string | null
    country: string
    created_at: Date
    updated_at: Date
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    patient_id?: boolean
    owner_id?: boolean
    first_name?: boolean
    middle_name?: boolean
    last_name?: boolean
    date_of_birth?: boolean
    gender?: boolean
    nationality?: boolean
    ethnicity?: boolean
    place_of_birth?: boolean
    id_type?: boolean
    government_id?: boolean
    contact_phone?: boolean
    contact_email?: boolean
    address_line1?: boolean
    address_line2?: boolean
    city?: boolean
    parish?: boolean
    postal_code?: boolean
    country?: boolean
    created_at?: boolean
    updated_at?: boolean
    medicalRecords?: boolean | Patient$medicalRecordsArgs<ExtArgs>
    educationHistory?: boolean | Patient$educationHistoryArgs<ExtArgs>
    employmentHistory?: boolean | Patient$employmentHistoryArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    patient_id?: boolean
    owner_id?: boolean
    first_name?: boolean
    middle_name?: boolean
    last_name?: boolean
    date_of_birth?: boolean
    gender?: boolean
    nationality?: boolean
    ethnicity?: boolean
    place_of_birth?: boolean
    id_type?: boolean
    government_id?: boolean
    contact_phone?: boolean
    contact_email?: boolean
    address_line1?: boolean
    address_line2?: boolean
    city?: boolean
    parish?: boolean
    postal_code?: boolean
    country?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    patient_id?: boolean
    owner_id?: boolean
    first_name?: boolean
    middle_name?: boolean
    last_name?: boolean
    date_of_birth?: boolean
    gender?: boolean
    nationality?: boolean
    ethnicity?: boolean
    place_of_birth?: boolean
    id_type?: boolean
    government_id?: boolean
    contact_phone?: boolean
    contact_email?: boolean
    address_line1?: boolean
    address_line2?: boolean
    city?: boolean
    parish?: boolean
    postal_code?: boolean
    country?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectScalar = {
    patient_id?: boolean
    owner_id?: boolean
    first_name?: boolean
    middle_name?: boolean
    last_name?: boolean
    date_of_birth?: boolean
    gender?: boolean
    nationality?: boolean
    ethnicity?: boolean
    place_of_birth?: boolean
    id_type?: boolean
    government_id?: boolean
    contact_phone?: boolean
    contact_email?: boolean
    address_line1?: boolean
    address_line2?: boolean
    city?: boolean
    parish?: boolean
    postal_code?: boolean
    country?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PatientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"patient_id" | "owner_id" | "first_name" | "middle_name" | "last_name" | "date_of_birth" | "gender" | "nationality" | "ethnicity" | "place_of_birth" | "id_type" | "government_id" | "contact_phone" | "contact_email" | "address_line1" | "address_line2" | "city" | "parish" | "postal_code" | "country" | "created_at" | "updated_at", ExtArgs["result"]["patient"]>
  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicalRecords?: boolean | Patient$medicalRecordsArgs<ExtArgs>
    educationHistory?: boolean | Patient$educationHistoryArgs<ExtArgs>
    employmentHistory?: boolean | Patient$employmentHistoryArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PatientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      medicalRecords: Prisma.$MedicalRecordPayload<ExtArgs>[]
      educationHistory: Prisma.$EducationHistoryPayload<ExtArgs>[]
      employmentHistory: Prisma.$EmploymentHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      patient_id: string
      owner_id: string
      first_name: string
      middle_name: string | null
      last_name: string
      date_of_birth: Date
      gender: string
      nationality: string
      ethnicity: string | null
      place_of_birth: string
      id_type: string
      government_id: string
      contact_phone: string | null
      contact_email: string | null
      address_line1: string
      address_line2: string | null
      city: string
      parish: string
      postal_code: string | null
      country: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `patient_id`
     * const patientWithPatient_idOnly = await prisma.patient.findMany({ select: { patient_id: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {PatientCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `patient_id`
     * const patientWithPatient_idOnly = await prisma.patient.createManyAndReturn({
     *   select: { patient_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {PatientUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `patient_id`
     * const patientWithPatient_idOnly = await prisma.patient.updateManyAndReturn({
     *   select: { patient_id: true },
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
    updateManyAndReturn<T extends PatientUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
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
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medicalRecords<T extends Patient$medicalRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$medicalRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    educationHistory<T extends Patient$educationHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Patient$educationHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationHistoryPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    employmentHistory<T extends Patient$employmentHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Patient$employmentHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmploymentHistoryPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Patient model
   */ 
  interface PatientFieldRefs {
    readonly patient_id: FieldRef<"Patient", 'String'>
    readonly owner_id: FieldRef<"Patient", 'String'>
    readonly first_name: FieldRef<"Patient", 'String'>
    readonly middle_name: FieldRef<"Patient", 'String'>
    readonly last_name: FieldRef<"Patient", 'String'>
    readonly date_of_birth: FieldRef<"Patient", 'DateTime'>
    readonly gender: FieldRef<"Patient", 'String'>
    readonly nationality: FieldRef<"Patient", 'String'>
    readonly ethnicity: FieldRef<"Patient", 'String'>
    readonly place_of_birth: FieldRef<"Patient", 'String'>
    readonly id_type: FieldRef<"Patient", 'String'>
    readonly government_id: FieldRef<"Patient", 'String'>
    readonly contact_phone: FieldRef<"Patient", 'String'>
    readonly contact_email: FieldRef<"Patient", 'String'>
    readonly address_line1: FieldRef<"Patient", 'String'>
    readonly address_line2: FieldRef<"Patient", 'String'>
    readonly city: FieldRef<"Patient", 'String'>
    readonly parish: FieldRef<"Patient", 'String'>
    readonly postal_code: FieldRef<"Patient", 'String'>
    readonly country: FieldRef<"Patient", 'String'>
    readonly created_at: FieldRef<"Patient", 'DateTime'>
    readonly updated_at: FieldRef<"Patient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient createManyAndReturn
   */
  export type PatientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient updateManyAndReturn
   */
  export type PatientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patient.medicalRecords
   */
  export type Patient$medicalRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    where?: MedicalRecordWhereInput
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    cursor?: MedicalRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicalRecordScalarFieldEnum | MedicalRecordScalarFieldEnum[]
  }

  /**
   * Patient.educationHistory
   */
  export type Patient$educationHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationHistory
     */
    select?: EducationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationHistory
     */
    omit?: EducationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationHistoryInclude<ExtArgs> | null
    where?: EducationHistoryWhereInput
    orderBy?: EducationHistoryOrderByWithRelationInput | EducationHistoryOrderByWithRelationInput[]
    cursor?: EducationHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EducationHistoryScalarFieldEnum | EducationHistoryScalarFieldEnum[]
  }

  /**
   * Patient.employmentHistory
   */
  export type Patient$employmentHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmploymentHistory
     */
    select?: EmploymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmploymentHistory
     */
    omit?: EmploymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmploymentHistoryInclude<ExtArgs> | null
    where?: EmploymentHistoryWhereInput
    orderBy?: EmploymentHistoryOrderByWithRelationInput | EmploymentHistoryOrderByWithRelationInput[]
    cursor?: EmploymentHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmploymentHistoryScalarFieldEnum | EmploymentHistoryScalarFieldEnum[]
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model MedicalRecord
   */

  export type AggregateMedicalRecord = {
    _count: MedicalRecordCountAggregateOutputType | null
    _min: MedicalRecordMinAggregateOutputType | null
    _max: MedicalRecordMaxAggregateOutputType | null
  }

  export type MedicalRecordMinAggregateOutputType = {
    record_id: string | null
    patient_id: string | null
    visit_date: Date | null
    provider: string | null
    visit_reason: string | null
    diagnosis: string | null
    treatment: string | null
    medications: string | null
    allergies: string | null
    vaccination_status: string | null
    notes: string | null
  }

  export type MedicalRecordMaxAggregateOutputType = {
    record_id: string | null
    patient_id: string | null
    visit_date: Date | null
    provider: string | null
    visit_reason: string | null
    diagnosis: string | null
    treatment: string | null
    medications: string | null
    allergies: string | null
    vaccination_status: string | null
    notes: string | null
  }

  export type MedicalRecordCountAggregateOutputType = {
    record_id: number
    patient_id: number
    visit_date: number
    provider: number
    visit_reason: number
    diagnosis: number
    treatment: number
    medications: number
    allergies: number
    vaccination_status: number
    notes: number
    _all: number
  }


  export type MedicalRecordMinAggregateInputType = {
    record_id?: true
    patient_id?: true
    visit_date?: true
    provider?: true
    visit_reason?: true
    diagnosis?: true
    treatment?: true
    medications?: true
    allergies?: true
    vaccination_status?: true
    notes?: true
  }

  export type MedicalRecordMaxAggregateInputType = {
    record_id?: true
    patient_id?: true
    visit_date?: true
    provider?: true
    visit_reason?: true
    diagnosis?: true
    treatment?: true
    medications?: true
    allergies?: true
    vaccination_status?: true
    notes?: true
  }

  export type MedicalRecordCountAggregateInputType = {
    record_id?: true
    patient_id?: true
    visit_date?: true
    provider?: true
    visit_reason?: true
    diagnosis?: true
    treatment?: true
    medications?: true
    allergies?: true
    vaccination_status?: true
    notes?: true
    _all?: true
  }

  export type MedicalRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalRecord to aggregate.
     */
    where?: MedicalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalRecords to fetch.
     */
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicalRecords
    **/
    _count?: true | MedicalRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicalRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicalRecordMaxAggregateInputType
  }

  export type GetMedicalRecordAggregateType<T extends MedicalRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicalRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicalRecord[P]>
      : GetScalarType<T[P], AggregateMedicalRecord[P]>
  }




  export type MedicalRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalRecordWhereInput
    orderBy?: MedicalRecordOrderByWithAggregationInput | MedicalRecordOrderByWithAggregationInput[]
    by: MedicalRecordScalarFieldEnum[] | MedicalRecordScalarFieldEnum
    having?: MedicalRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicalRecordCountAggregateInputType | true
    _min?: MedicalRecordMinAggregateInputType
    _max?: MedicalRecordMaxAggregateInputType
  }

  export type MedicalRecordGroupByOutputType = {
    record_id: string
    patient_id: string
    visit_date: Date
    provider: string
    visit_reason: string
    diagnosis: string | null
    treatment: string | null
    medications: string | null
    allergies: string | null
    vaccination_status: string | null
    notes: string | null
    _count: MedicalRecordCountAggregateOutputType | null
    _min: MedicalRecordMinAggregateOutputType | null
    _max: MedicalRecordMaxAggregateOutputType | null
  }

  type GetMedicalRecordGroupByPayload<T extends MedicalRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicalRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicalRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicalRecordGroupByOutputType[P]>
            : GetScalarType<T[P], MedicalRecordGroupByOutputType[P]>
        }
      >
    >


  export type MedicalRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    record_id?: boolean
    patient_id?: boolean
    visit_date?: boolean
    provider?: boolean
    visit_reason?: boolean
    diagnosis?: boolean
    treatment?: boolean
    medications?: boolean
    allergies?: boolean
    vaccination_status?: boolean
    notes?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalRecord"]>

  export type MedicalRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    record_id?: boolean
    patient_id?: boolean
    visit_date?: boolean
    provider?: boolean
    visit_reason?: boolean
    diagnosis?: boolean
    treatment?: boolean
    medications?: boolean
    allergies?: boolean
    vaccination_status?: boolean
    notes?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalRecord"]>

  export type MedicalRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    record_id?: boolean
    patient_id?: boolean
    visit_date?: boolean
    provider?: boolean
    visit_reason?: boolean
    diagnosis?: boolean
    treatment?: boolean
    medications?: boolean
    allergies?: boolean
    vaccination_status?: boolean
    notes?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalRecord"]>

  export type MedicalRecordSelectScalar = {
    record_id?: boolean
    patient_id?: boolean
    visit_date?: boolean
    provider?: boolean
    visit_reason?: boolean
    diagnosis?: boolean
    treatment?: boolean
    medications?: boolean
    allergies?: boolean
    vaccination_status?: boolean
    notes?: boolean
  }

  export type MedicalRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"record_id" | "patient_id" | "visit_date" | "provider" | "visit_reason" | "diagnosis" | "treatment" | "medications" | "allergies" | "vaccination_status" | "notes", ExtArgs["result"]["medicalRecord"]>
  export type MedicalRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type MedicalRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type MedicalRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $MedicalRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicalRecord"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      record_id: string
      patient_id: string
      visit_date: Date
      provider: string
      visit_reason: string
      diagnosis: string | null
      treatment: string | null
      medications: string | null
      allergies: string | null
      vaccination_status: string | null
      notes: string | null
    }, ExtArgs["result"]["medicalRecord"]>
    composites: {}
  }

  type MedicalRecordGetPayload<S extends boolean | null | undefined | MedicalRecordDefaultArgs> = $Result.GetResult<Prisma.$MedicalRecordPayload, S>

  type MedicalRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicalRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicalRecordCountAggregateInputType | true
    }

  export interface MedicalRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicalRecord'], meta: { name: 'MedicalRecord' } }
    /**
     * Find zero or one MedicalRecord that matches the filter.
     * @param {MedicalRecordFindUniqueArgs} args - Arguments to find a MedicalRecord
     * @example
     * // Get one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicalRecordFindUniqueArgs>(args: SelectSubset<T, MedicalRecordFindUniqueArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one MedicalRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicalRecordFindUniqueOrThrowArgs} args - Arguments to find a MedicalRecord
     * @example
     * // Get one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicalRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicalRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first MedicalRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordFindFirstArgs} args - Arguments to find a MedicalRecord
     * @example
     * // Get one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicalRecordFindFirstArgs>(args?: SelectSubset<T, MedicalRecordFindFirstArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first MedicalRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordFindFirstOrThrowArgs} args - Arguments to find a MedicalRecord
     * @example
     * // Get one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicalRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicalRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more MedicalRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicalRecords
     * const medicalRecords = await prisma.medicalRecord.findMany()
     * 
     * // Get first 10 MedicalRecords
     * const medicalRecords = await prisma.medicalRecord.findMany({ take: 10 })
     * 
     * // Only select the `record_id`
     * const medicalRecordWithRecord_idOnly = await prisma.medicalRecord.findMany({ select: { record_id: true } })
     * 
     */
    findMany<T extends MedicalRecordFindManyArgs>(args?: SelectSubset<T, MedicalRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a MedicalRecord.
     * @param {MedicalRecordCreateArgs} args - Arguments to create a MedicalRecord.
     * @example
     * // Create one MedicalRecord
     * const MedicalRecord = await prisma.medicalRecord.create({
     *   data: {
     *     // ... data to create a MedicalRecord
     *   }
     * })
     * 
     */
    create<T extends MedicalRecordCreateArgs>(args: SelectSubset<T, MedicalRecordCreateArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many MedicalRecords.
     * @param {MedicalRecordCreateManyArgs} args - Arguments to create many MedicalRecords.
     * @example
     * // Create many MedicalRecords
     * const medicalRecord = await prisma.medicalRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicalRecordCreateManyArgs>(args?: SelectSubset<T, MedicalRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MedicalRecords and returns the data saved in the database.
     * @param {MedicalRecordCreateManyAndReturnArgs} args - Arguments to create many MedicalRecords.
     * @example
     * // Create many MedicalRecords
     * const medicalRecord = await prisma.medicalRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MedicalRecords and only return the `record_id`
     * const medicalRecordWithRecord_idOnly = await prisma.medicalRecord.createManyAndReturn({
     *   select: { record_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicalRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicalRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a MedicalRecord.
     * @param {MedicalRecordDeleteArgs} args - Arguments to delete one MedicalRecord.
     * @example
     * // Delete one MedicalRecord
     * const MedicalRecord = await prisma.medicalRecord.delete({
     *   where: {
     *     // ... filter to delete one MedicalRecord
     *   }
     * })
     * 
     */
    delete<T extends MedicalRecordDeleteArgs>(args: SelectSubset<T, MedicalRecordDeleteArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one MedicalRecord.
     * @param {MedicalRecordUpdateArgs} args - Arguments to update one MedicalRecord.
     * @example
     * // Update one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicalRecordUpdateArgs>(args: SelectSubset<T, MedicalRecordUpdateArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more MedicalRecords.
     * @param {MedicalRecordDeleteManyArgs} args - Arguments to filter MedicalRecords to delete.
     * @example
     * // Delete a few MedicalRecords
     * const { count } = await prisma.medicalRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicalRecordDeleteManyArgs>(args?: SelectSubset<T, MedicalRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicalRecords
     * const medicalRecord = await prisma.medicalRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicalRecordUpdateManyArgs>(args: SelectSubset<T, MedicalRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalRecords and returns the data updated in the database.
     * @param {MedicalRecordUpdateManyAndReturnArgs} args - Arguments to update many MedicalRecords.
     * @example
     * // Update many MedicalRecords
     * const medicalRecord = await prisma.medicalRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MedicalRecords and only return the `record_id`
     * const medicalRecordWithRecord_idOnly = await prisma.medicalRecord.updateManyAndReturn({
     *   select: { record_id: true },
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
    updateManyAndReturn<T extends MedicalRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicalRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one MedicalRecord.
     * @param {MedicalRecordUpsertArgs} args - Arguments to update or create a MedicalRecord.
     * @example
     * // Update or create a MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.upsert({
     *   create: {
     *     // ... data to create a MedicalRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicalRecord we want to update
     *   }
     * })
     */
    upsert<T extends MedicalRecordUpsertArgs>(args: SelectSubset<T, MedicalRecordUpsertArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of MedicalRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordCountArgs} args - Arguments to filter MedicalRecords to count.
     * @example
     * // Count the number of MedicalRecords
     * const count = await prisma.medicalRecord.count({
     *   where: {
     *     // ... the filter for the MedicalRecords we want to count
     *   }
     * })
    **/
    count<T extends MedicalRecordCountArgs>(
      args?: Subset<T, MedicalRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicalRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicalRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicalRecordAggregateArgs>(args: Subset<T, MedicalRecordAggregateArgs>): Prisma.PrismaPromise<GetMedicalRecordAggregateType<T>>

    /**
     * Group by MedicalRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordGroupByArgs} args - Group by arguments.
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
      T extends MedicalRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicalRecordGroupByArgs['orderBy'] }
        : { orderBy?: MedicalRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicalRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicalRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicalRecord model
   */
  readonly fields: MedicalRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicalRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicalRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the MedicalRecord model
   */ 
  interface MedicalRecordFieldRefs {
    readonly record_id: FieldRef<"MedicalRecord", 'String'>
    readonly patient_id: FieldRef<"MedicalRecord", 'String'>
    readonly visit_date: FieldRef<"MedicalRecord", 'DateTime'>
    readonly provider: FieldRef<"MedicalRecord", 'String'>
    readonly visit_reason: FieldRef<"MedicalRecord", 'String'>
    readonly diagnosis: FieldRef<"MedicalRecord", 'String'>
    readonly treatment: FieldRef<"MedicalRecord", 'String'>
    readonly medications: FieldRef<"MedicalRecord", 'String'>
    readonly allergies: FieldRef<"MedicalRecord", 'String'>
    readonly vaccination_status: FieldRef<"MedicalRecord", 'String'>
    readonly notes: FieldRef<"MedicalRecord", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MedicalRecord findUnique
   */
  export type MedicalRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecord to fetch.
     */
    where: MedicalRecordWhereUniqueInput
  }

  /**
   * MedicalRecord findUniqueOrThrow
   */
  export type MedicalRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecord to fetch.
     */
    where: MedicalRecordWhereUniqueInput
  }

  /**
   * MedicalRecord findFirst
   */
  export type MedicalRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecord to fetch.
     */
    where?: MedicalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalRecords to fetch.
     */
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalRecords.
     */
    cursor?: MedicalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalRecords.
     */
    distinct?: MedicalRecordScalarFieldEnum | MedicalRecordScalarFieldEnum[]
  }

  /**
   * MedicalRecord findFirstOrThrow
   */
  export type MedicalRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecord to fetch.
     */
    where?: MedicalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalRecords to fetch.
     */
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalRecords.
     */
    cursor?: MedicalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalRecords.
     */
    distinct?: MedicalRecordScalarFieldEnum | MedicalRecordScalarFieldEnum[]
  }

  /**
   * MedicalRecord findMany
   */
  export type MedicalRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecords to fetch.
     */
    where?: MedicalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalRecords to fetch.
     */
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicalRecords.
     */
    cursor?: MedicalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalRecords.
     */
    skip?: number
    distinct?: MedicalRecordScalarFieldEnum | MedicalRecordScalarFieldEnum[]
  }

  /**
   * MedicalRecord create
   */
  export type MedicalRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicalRecord.
     */
    data: XOR<MedicalRecordCreateInput, MedicalRecordUncheckedCreateInput>
  }

  /**
   * MedicalRecord createMany
   */
  export type MedicalRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicalRecords.
     */
    data: MedicalRecordCreateManyInput | MedicalRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MedicalRecord createManyAndReturn
   */
  export type MedicalRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * The data used to create many MedicalRecords.
     */
    data: MedicalRecordCreateManyInput | MedicalRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicalRecord update
   */
  export type MedicalRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicalRecord.
     */
    data: XOR<MedicalRecordUpdateInput, MedicalRecordUncheckedUpdateInput>
    /**
     * Choose, which MedicalRecord to update.
     */
    where: MedicalRecordWhereUniqueInput
  }

  /**
   * MedicalRecord updateMany
   */
  export type MedicalRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicalRecords.
     */
    data: XOR<MedicalRecordUpdateManyMutationInput, MedicalRecordUncheckedUpdateManyInput>
    /**
     * Filter which MedicalRecords to update
     */
    where?: MedicalRecordWhereInput
    /**
     * Limit how many MedicalRecords to update.
     */
    limit?: number
  }

  /**
   * MedicalRecord updateManyAndReturn
   */
  export type MedicalRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * The data used to update MedicalRecords.
     */
    data: XOR<MedicalRecordUpdateManyMutationInput, MedicalRecordUncheckedUpdateManyInput>
    /**
     * Filter which MedicalRecords to update
     */
    where?: MedicalRecordWhereInput
    /**
     * Limit how many MedicalRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicalRecord upsert
   */
  export type MedicalRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicalRecord to update in case it exists.
     */
    where: MedicalRecordWhereUniqueInput
    /**
     * In case the MedicalRecord found by the `where` argument doesn't exist, create a new MedicalRecord with this data.
     */
    create: XOR<MedicalRecordCreateInput, MedicalRecordUncheckedCreateInput>
    /**
     * In case the MedicalRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicalRecordUpdateInput, MedicalRecordUncheckedUpdateInput>
  }

  /**
   * MedicalRecord delete
   */
  export type MedicalRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter which MedicalRecord to delete.
     */
    where: MedicalRecordWhereUniqueInput
  }

  /**
   * MedicalRecord deleteMany
   */
  export type MedicalRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalRecords to delete
     */
    where?: MedicalRecordWhereInput
    /**
     * Limit how many MedicalRecords to delete.
     */
    limit?: number
  }

  /**
   * MedicalRecord without action
   */
  export type MedicalRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
  }


  /**
   * Model EducationHistory
   */

  export type AggregateEducationHistory = {
    _count: EducationHistoryCountAggregateOutputType | null
    _min: EducationHistoryMinAggregateOutputType | null
    _max: EducationHistoryMaxAggregateOutputType | null
  }

  export type EducationHistoryMinAggregateOutputType = {
    education_id: string | null
    patient_id: string | null
    institution_names: string | null
    qualification: string | null
    start_date: Date | null
    end_date: Date | null
    notes: string | null
  }

  export type EducationHistoryMaxAggregateOutputType = {
    education_id: string | null
    patient_id: string | null
    institution_names: string | null
    qualification: string | null
    start_date: Date | null
    end_date: Date | null
    notes: string | null
  }

  export type EducationHistoryCountAggregateOutputType = {
    education_id: number
    patient_id: number
    institution_names: number
    qualification: number
    start_date: number
    end_date: number
    notes: number
    _all: number
  }


  export type EducationHistoryMinAggregateInputType = {
    education_id?: true
    patient_id?: true
    institution_names?: true
    qualification?: true
    start_date?: true
    end_date?: true
    notes?: true
  }

  export type EducationHistoryMaxAggregateInputType = {
    education_id?: true
    patient_id?: true
    institution_names?: true
    qualification?: true
    start_date?: true
    end_date?: true
    notes?: true
  }

  export type EducationHistoryCountAggregateInputType = {
    education_id?: true
    patient_id?: true
    institution_names?: true
    qualification?: true
    start_date?: true
    end_date?: true
    notes?: true
    _all?: true
  }

  export type EducationHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EducationHistory to aggregate.
     */
    where?: EducationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EducationHistories to fetch.
     */
    orderBy?: EducationHistoryOrderByWithRelationInput | EducationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EducationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EducationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EducationHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EducationHistories
    **/
    _count?: true | EducationHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EducationHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EducationHistoryMaxAggregateInputType
  }

  export type GetEducationHistoryAggregateType<T extends EducationHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateEducationHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducationHistory[P]>
      : GetScalarType<T[P], AggregateEducationHistory[P]>
  }




  export type EducationHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationHistoryWhereInput
    orderBy?: EducationHistoryOrderByWithAggregationInput | EducationHistoryOrderByWithAggregationInput[]
    by: EducationHistoryScalarFieldEnum[] | EducationHistoryScalarFieldEnum
    having?: EducationHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EducationHistoryCountAggregateInputType | true
    _min?: EducationHistoryMinAggregateInputType
    _max?: EducationHistoryMaxAggregateInputType
  }

  export type EducationHistoryGroupByOutputType = {
    education_id: string
    patient_id: string
    institution_names: string
    qualification: string
    start_date: Date
    end_date: Date | null
    notes: string | null
    _count: EducationHistoryCountAggregateOutputType | null
    _min: EducationHistoryMinAggregateOutputType | null
    _max: EducationHistoryMaxAggregateOutputType | null
  }

  type GetEducationHistoryGroupByPayload<T extends EducationHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EducationHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EducationHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EducationHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], EducationHistoryGroupByOutputType[P]>
        }
      >
    >


  export type EducationHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    education_id?: boolean
    patient_id?: boolean
    institution_names?: boolean
    qualification?: boolean
    start_date?: boolean
    end_date?: boolean
    notes?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["educationHistory"]>

  export type EducationHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    education_id?: boolean
    patient_id?: boolean
    institution_names?: boolean
    qualification?: boolean
    start_date?: boolean
    end_date?: boolean
    notes?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["educationHistory"]>

  export type EducationHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    education_id?: boolean
    patient_id?: boolean
    institution_names?: boolean
    qualification?: boolean
    start_date?: boolean
    end_date?: boolean
    notes?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["educationHistory"]>

  export type EducationHistorySelectScalar = {
    education_id?: boolean
    patient_id?: boolean
    institution_names?: boolean
    qualification?: boolean
    start_date?: boolean
    end_date?: boolean
    notes?: boolean
  }

  export type EducationHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"education_id" | "patient_id" | "institution_names" | "qualification" | "start_date" | "end_date" | "notes", ExtArgs["result"]["educationHistory"]>
  export type EducationHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type EducationHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type EducationHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $EducationHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EducationHistory"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      education_id: string
      patient_id: string
      institution_names: string
      qualification: string
      start_date: Date
      end_date: Date | null
      notes: string | null
    }, ExtArgs["result"]["educationHistory"]>
    composites: {}
  }

  type EducationHistoryGetPayload<S extends boolean | null | undefined | EducationHistoryDefaultArgs> = $Result.GetResult<Prisma.$EducationHistoryPayload, S>

  type EducationHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EducationHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EducationHistoryCountAggregateInputType | true
    }

  export interface EducationHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EducationHistory'], meta: { name: 'EducationHistory' } }
    /**
     * Find zero or one EducationHistory that matches the filter.
     * @param {EducationHistoryFindUniqueArgs} args - Arguments to find a EducationHistory
     * @example
     * // Get one EducationHistory
     * const educationHistory = await prisma.educationHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EducationHistoryFindUniqueArgs>(args: SelectSubset<T, EducationHistoryFindUniqueArgs<ExtArgs>>): Prisma__EducationHistoryClient<$Result.GetResult<Prisma.$EducationHistoryPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one EducationHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EducationHistoryFindUniqueOrThrowArgs} args - Arguments to find a EducationHistory
     * @example
     * // Get one EducationHistory
     * const educationHistory = await prisma.educationHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EducationHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, EducationHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EducationHistoryClient<$Result.GetResult<Prisma.$EducationHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first EducationHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationHistoryFindFirstArgs} args - Arguments to find a EducationHistory
     * @example
     * // Get one EducationHistory
     * const educationHistory = await prisma.educationHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EducationHistoryFindFirstArgs>(args?: SelectSubset<T, EducationHistoryFindFirstArgs<ExtArgs>>): Prisma__EducationHistoryClient<$Result.GetResult<Prisma.$EducationHistoryPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first EducationHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationHistoryFindFirstOrThrowArgs} args - Arguments to find a EducationHistory
     * @example
     * // Get one EducationHistory
     * const educationHistory = await prisma.educationHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EducationHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, EducationHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__EducationHistoryClient<$Result.GetResult<Prisma.$EducationHistoryPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more EducationHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EducationHistories
     * const educationHistories = await prisma.educationHistory.findMany()
     * 
     * // Get first 10 EducationHistories
     * const educationHistories = await prisma.educationHistory.findMany({ take: 10 })
     * 
     * // Only select the `education_id`
     * const educationHistoryWithEducation_idOnly = await prisma.educationHistory.findMany({ select: { education_id: true } })
     * 
     */
    findMany<T extends EducationHistoryFindManyArgs>(args?: SelectSubset<T, EducationHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationHistoryPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a EducationHistory.
     * @param {EducationHistoryCreateArgs} args - Arguments to create a EducationHistory.
     * @example
     * // Create one EducationHistory
     * const EducationHistory = await prisma.educationHistory.create({
     *   data: {
     *     // ... data to create a EducationHistory
     *   }
     * })
     * 
     */
    create<T extends EducationHistoryCreateArgs>(args: SelectSubset<T, EducationHistoryCreateArgs<ExtArgs>>): Prisma__EducationHistoryClient<$Result.GetResult<Prisma.$EducationHistoryPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many EducationHistories.
     * @param {EducationHistoryCreateManyArgs} args - Arguments to create many EducationHistories.
     * @example
     * // Create many EducationHistories
     * const educationHistory = await prisma.educationHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EducationHistoryCreateManyArgs>(args?: SelectSubset<T, EducationHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EducationHistories and returns the data saved in the database.
     * @param {EducationHistoryCreateManyAndReturnArgs} args - Arguments to create many EducationHistories.
     * @example
     * // Create many EducationHistories
     * const educationHistory = await prisma.educationHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EducationHistories and only return the `education_id`
     * const educationHistoryWithEducation_idOnly = await prisma.educationHistory.createManyAndReturn({
     *   select: { education_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EducationHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, EducationHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationHistoryPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a EducationHistory.
     * @param {EducationHistoryDeleteArgs} args - Arguments to delete one EducationHistory.
     * @example
     * // Delete one EducationHistory
     * const EducationHistory = await prisma.educationHistory.delete({
     *   where: {
     *     // ... filter to delete one EducationHistory
     *   }
     * })
     * 
     */
    delete<T extends EducationHistoryDeleteArgs>(args: SelectSubset<T, EducationHistoryDeleteArgs<ExtArgs>>): Prisma__EducationHistoryClient<$Result.GetResult<Prisma.$EducationHistoryPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one EducationHistory.
     * @param {EducationHistoryUpdateArgs} args - Arguments to update one EducationHistory.
     * @example
     * // Update one EducationHistory
     * const educationHistory = await prisma.educationHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EducationHistoryUpdateArgs>(args: SelectSubset<T, EducationHistoryUpdateArgs<ExtArgs>>): Prisma__EducationHistoryClient<$Result.GetResult<Prisma.$EducationHistoryPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more EducationHistories.
     * @param {EducationHistoryDeleteManyArgs} args - Arguments to filter EducationHistories to delete.
     * @example
     * // Delete a few EducationHistories
     * const { count } = await prisma.educationHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EducationHistoryDeleteManyArgs>(args?: SelectSubset<T, EducationHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EducationHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EducationHistories
     * const educationHistory = await prisma.educationHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EducationHistoryUpdateManyArgs>(args: SelectSubset<T, EducationHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EducationHistories and returns the data updated in the database.
     * @param {EducationHistoryUpdateManyAndReturnArgs} args - Arguments to update many EducationHistories.
     * @example
     * // Update many EducationHistories
     * const educationHistory = await prisma.educationHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EducationHistories and only return the `education_id`
     * const educationHistoryWithEducation_idOnly = await prisma.educationHistory.updateManyAndReturn({
     *   select: { education_id: true },
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
    updateManyAndReturn<T extends EducationHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, EducationHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationHistoryPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one EducationHistory.
     * @param {EducationHistoryUpsertArgs} args - Arguments to update or create a EducationHistory.
     * @example
     * // Update or create a EducationHistory
     * const educationHistory = await prisma.educationHistory.upsert({
     *   create: {
     *     // ... data to create a EducationHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EducationHistory we want to update
     *   }
     * })
     */
    upsert<T extends EducationHistoryUpsertArgs>(args: SelectSubset<T, EducationHistoryUpsertArgs<ExtArgs>>): Prisma__EducationHistoryClient<$Result.GetResult<Prisma.$EducationHistoryPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of EducationHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationHistoryCountArgs} args - Arguments to filter EducationHistories to count.
     * @example
     * // Count the number of EducationHistories
     * const count = await prisma.educationHistory.count({
     *   where: {
     *     // ... the filter for the EducationHistories we want to count
     *   }
     * })
    **/
    count<T extends EducationHistoryCountArgs>(
      args?: Subset<T, EducationHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EducationHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EducationHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EducationHistoryAggregateArgs>(args: Subset<T, EducationHistoryAggregateArgs>): Prisma.PrismaPromise<GetEducationHistoryAggregateType<T>>

    /**
     * Group by EducationHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationHistoryGroupByArgs} args - Group by arguments.
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
      T extends EducationHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EducationHistoryGroupByArgs['orderBy'] }
        : { orderBy?: EducationHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EducationHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducationHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EducationHistory model
   */
  readonly fields: EducationHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EducationHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EducationHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the EducationHistory model
   */ 
  interface EducationHistoryFieldRefs {
    readonly education_id: FieldRef<"EducationHistory", 'String'>
    readonly patient_id: FieldRef<"EducationHistory", 'String'>
    readonly institution_names: FieldRef<"EducationHistory", 'String'>
    readonly qualification: FieldRef<"EducationHistory", 'String'>
    readonly start_date: FieldRef<"EducationHistory", 'DateTime'>
    readonly end_date: FieldRef<"EducationHistory", 'DateTime'>
    readonly notes: FieldRef<"EducationHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EducationHistory findUnique
   */
  export type EducationHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationHistory
     */
    select?: EducationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationHistory
     */
    omit?: EducationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationHistoryInclude<ExtArgs> | null
    /**
     * Filter, which EducationHistory to fetch.
     */
    where: EducationHistoryWhereUniqueInput
  }

  /**
   * EducationHistory findUniqueOrThrow
   */
  export type EducationHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationHistory
     */
    select?: EducationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationHistory
     */
    omit?: EducationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationHistoryInclude<ExtArgs> | null
    /**
     * Filter, which EducationHistory to fetch.
     */
    where: EducationHistoryWhereUniqueInput
  }

  /**
   * EducationHistory findFirst
   */
  export type EducationHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationHistory
     */
    select?: EducationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationHistory
     */
    omit?: EducationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationHistoryInclude<ExtArgs> | null
    /**
     * Filter, which EducationHistory to fetch.
     */
    where?: EducationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EducationHistories to fetch.
     */
    orderBy?: EducationHistoryOrderByWithRelationInput | EducationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EducationHistories.
     */
    cursor?: EducationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EducationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EducationHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EducationHistories.
     */
    distinct?: EducationHistoryScalarFieldEnum | EducationHistoryScalarFieldEnum[]
  }

  /**
   * EducationHistory findFirstOrThrow
   */
  export type EducationHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationHistory
     */
    select?: EducationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationHistory
     */
    omit?: EducationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationHistoryInclude<ExtArgs> | null
    /**
     * Filter, which EducationHistory to fetch.
     */
    where?: EducationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EducationHistories to fetch.
     */
    orderBy?: EducationHistoryOrderByWithRelationInput | EducationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EducationHistories.
     */
    cursor?: EducationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EducationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EducationHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EducationHistories.
     */
    distinct?: EducationHistoryScalarFieldEnum | EducationHistoryScalarFieldEnum[]
  }

  /**
   * EducationHistory findMany
   */
  export type EducationHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationHistory
     */
    select?: EducationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationHistory
     */
    omit?: EducationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationHistoryInclude<ExtArgs> | null
    /**
     * Filter, which EducationHistories to fetch.
     */
    where?: EducationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EducationHistories to fetch.
     */
    orderBy?: EducationHistoryOrderByWithRelationInput | EducationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EducationHistories.
     */
    cursor?: EducationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EducationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EducationHistories.
     */
    skip?: number
    distinct?: EducationHistoryScalarFieldEnum | EducationHistoryScalarFieldEnum[]
  }

  /**
   * EducationHistory create
   */
  export type EducationHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationHistory
     */
    select?: EducationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationHistory
     */
    omit?: EducationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a EducationHistory.
     */
    data: XOR<EducationHistoryCreateInput, EducationHistoryUncheckedCreateInput>
  }

  /**
   * EducationHistory createMany
   */
  export type EducationHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EducationHistories.
     */
    data: EducationHistoryCreateManyInput | EducationHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EducationHistory createManyAndReturn
   */
  export type EducationHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationHistory
     */
    select?: EducationHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EducationHistory
     */
    omit?: EducationHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many EducationHistories.
     */
    data: EducationHistoryCreateManyInput | EducationHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EducationHistory update
   */
  export type EducationHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationHistory
     */
    select?: EducationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationHistory
     */
    omit?: EducationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a EducationHistory.
     */
    data: XOR<EducationHistoryUpdateInput, EducationHistoryUncheckedUpdateInput>
    /**
     * Choose, which EducationHistory to update.
     */
    where: EducationHistoryWhereUniqueInput
  }

  /**
   * EducationHistory updateMany
   */
  export type EducationHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EducationHistories.
     */
    data: XOR<EducationHistoryUpdateManyMutationInput, EducationHistoryUncheckedUpdateManyInput>
    /**
     * Filter which EducationHistories to update
     */
    where?: EducationHistoryWhereInput
    /**
     * Limit how many EducationHistories to update.
     */
    limit?: number
  }

  /**
   * EducationHistory updateManyAndReturn
   */
  export type EducationHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationHistory
     */
    select?: EducationHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EducationHistory
     */
    omit?: EducationHistoryOmit<ExtArgs> | null
    /**
     * The data used to update EducationHistories.
     */
    data: XOR<EducationHistoryUpdateManyMutationInput, EducationHistoryUncheckedUpdateManyInput>
    /**
     * Filter which EducationHistories to update
     */
    where?: EducationHistoryWhereInput
    /**
     * Limit how many EducationHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EducationHistory upsert
   */
  export type EducationHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationHistory
     */
    select?: EducationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationHistory
     */
    omit?: EducationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the EducationHistory to update in case it exists.
     */
    where: EducationHistoryWhereUniqueInput
    /**
     * In case the EducationHistory found by the `where` argument doesn't exist, create a new EducationHistory with this data.
     */
    create: XOR<EducationHistoryCreateInput, EducationHistoryUncheckedCreateInput>
    /**
     * In case the EducationHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EducationHistoryUpdateInput, EducationHistoryUncheckedUpdateInput>
  }

  /**
   * EducationHistory delete
   */
  export type EducationHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationHistory
     */
    select?: EducationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationHistory
     */
    omit?: EducationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationHistoryInclude<ExtArgs> | null
    /**
     * Filter which EducationHistory to delete.
     */
    where: EducationHistoryWhereUniqueInput
  }

  /**
   * EducationHistory deleteMany
   */
  export type EducationHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EducationHistories to delete
     */
    where?: EducationHistoryWhereInput
    /**
     * Limit how many EducationHistories to delete.
     */
    limit?: number
  }

  /**
   * EducationHistory without action
   */
  export type EducationHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationHistory
     */
    select?: EducationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationHistory
     */
    omit?: EducationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationHistoryInclude<ExtArgs> | null
  }


  /**
   * Model EmploymentHistory
   */

  export type AggregateEmploymentHistory = {
    _count: EmploymentHistoryCountAggregateOutputType | null
    _min: EmploymentHistoryMinAggregateOutputType | null
    _max: EmploymentHistoryMaxAggregateOutputType | null
  }

  export type EmploymentHistoryMinAggregateOutputType = {
    employment_id: string | null
    patient_id: string | null
    employer_name: string | null
    job_title: string | null
    start_date: Date | null
    end_date: Date | null
    employment_status: string | null
    notes: string | null
  }

  export type EmploymentHistoryMaxAggregateOutputType = {
    employment_id: string | null
    patient_id: string | null
    employer_name: string | null
    job_title: string | null
    start_date: Date | null
    end_date: Date | null
    employment_status: string | null
    notes: string | null
  }

  export type EmploymentHistoryCountAggregateOutputType = {
    employment_id: number
    patient_id: number
    employer_name: number
    job_title: number
    start_date: number
    end_date: number
    employment_status: number
    notes: number
    _all: number
  }


  export type EmploymentHistoryMinAggregateInputType = {
    employment_id?: true
    patient_id?: true
    employer_name?: true
    job_title?: true
    start_date?: true
    end_date?: true
    employment_status?: true
    notes?: true
  }

  export type EmploymentHistoryMaxAggregateInputType = {
    employment_id?: true
    patient_id?: true
    employer_name?: true
    job_title?: true
    start_date?: true
    end_date?: true
    employment_status?: true
    notes?: true
  }

  export type EmploymentHistoryCountAggregateInputType = {
    employment_id?: true
    patient_id?: true
    employer_name?: true
    job_title?: true
    start_date?: true
    end_date?: true
    employment_status?: true
    notes?: true
    _all?: true
  }

  export type EmploymentHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmploymentHistory to aggregate.
     */
    where?: EmploymentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmploymentHistories to fetch.
     */
    orderBy?: EmploymentHistoryOrderByWithRelationInput | EmploymentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmploymentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmploymentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmploymentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmploymentHistories
    **/
    _count?: true | EmploymentHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmploymentHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmploymentHistoryMaxAggregateInputType
  }

  export type GetEmploymentHistoryAggregateType<T extends EmploymentHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateEmploymentHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmploymentHistory[P]>
      : GetScalarType<T[P], AggregateEmploymentHistory[P]>
  }




  export type EmploymentHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmploymentHistoryWhereInput
    orderBy?: EmploymentHistoryOrderByWithAggregationInput | EmploymentHistoryOrderByWithAggregationInput[]
    by: EmploymentHistoryScalarFieldEnum[] | EmploymentHistoryScalarFieldEnum
    having?: EmploymentHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmploymentHistoryCountAggregateInputType | true
    _min?: EmploymentHistoryMinAggregateInputType
    _max?: EmploymentHistoryMaxAggregateInputType
  }

  export type EmploymentHistoryGroupByOutputType = {
    employment_id: string
    patient_id: string
    employer_name: string
    job_title: string
    start_date: Date
    end_date: Date | null
    employment_status: string
    notes: string | null
    _count: EmploymentHistoryCountAggregateOutputType | null
    _min: EmploymentHistoryMinAggregateOutputType | null
    _max: EmploymentHistoryMaxAggregateOutputType | null
  }

  type GetEmploymentHistoryGroupByPayload<T extends EmploymentHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmploymentHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmploymentHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmploymentHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], EmploymentHistoryGroupByOutputType[P]>
        }
      >
    >


  export type EmploymentHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    employment_id?: boolean
    patient_id?: boolean
    employer_name?: boolean
    job_title?: boolean
    start_date?: boolean
    end_date?: boolean
    employment_status?: boolean
    notes?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employmentHistory"]>

  export type EmploymentHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    employment_id?: boolean
    patient_id?: boolean
    employer_name?: boolean
    job_title?: boolean
    start_date?: boolean
    end_date?: boolean
    employment_status?: boolean
    notes?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employmentHistory"]>

  export type EmploymentHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    employment_id?: boolean
    patient_id?: boolean
    employer_name?: boolean
    job_title?: boolean
    start_date?: boolean
    end_date?: boolean
    employment_status?: boolean
    notes?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employmentHistory"]>

  export type EmploymentHistorySelectScalar = {
    employment_id?: boolean
    patient_id?: boolean
    employer_name?: boolean
    job_title?: boolean
    start_date?: boolean
    end_date?: boolean
    employment_status?: boolean
    notes?: boolean
  }

  export type EmploymentHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"employment_id" | "patient_id" | "employer_name" | "job_title" | "start_date" | "end_date" | "employment_status" | "notes", ExtArgs["result"]["employmentHistory"]>
  export type EmploymentHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type EmploymentHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type EmploymentHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $EmploymentHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmploymentHistory"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      employment_id: string
      patient_id: string
      employer_name: string
      job_title: string
      start_date: Date
      end_date: Date | null
      employment_status: string
      notes: string | null
    }, ExtArgs["result"]["employmentHistory"]>
    composites: {}
  }

  type EmploymentHistoryGetPayload<S extends boolean | null | undefined | EmploymentHistoryDefaultArgs> = $Result.GetResult<Prisma.$EmploymentHistoryPayload, S>

  type EmploymentHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmploymentHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmploymentHistoryCountAggregateInputType | true
    }

  export interface EmploymentHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmploymentHistory'], meta: { name: 'EmploymentHistory' } }
    /**
     * Find zero or one EmploymentHistory that matches the filter.
     * @param {EmploymentHistoryFindUniqueArgs} args - Arguments to find a EmploymentHistory
     * @example
     * // Get one EmploymentHistory
     * const employmentHistory = await prisma.employmentHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmploymentHistoryFindUniqueArgs>(args: SelectSubset<T, EmploymentHistoryFindUniqueArgs<ExtArgs>>): Prisma__EmploymentHistoryClient<$Result.GetResult<Prisma.$EmploymentHistoryPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one EmploymentHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmploymentHistoryFindUniqueOrThrowArgs} args - Arguments to find a EmploymentHistory
     * @example
     * // Get one EmploymentHistory
     * const employmentHistory = await prisma.employmentHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmploymentHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, EmploymentHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmploymentHistoryClient<$Result.GetResult<Prisma.$EmploymentHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first EmploymentHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmploymentHistoryFindFirstArgs} args - Arguments to find a EmploymentHistory
     * @example
     * // Get one EmploymentHistory
     * const employmentHistory = await prisma.employmentHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmploymentHistoryFindFirstArgs>(args?: SelectSubset<T, EmploymentHistoryFindFirstArgs<ExtArgs>>): Prisma__EmploymentHistoryClient<$Result.GetResult<Prisma.$EmploymentHistoryPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first EmploymentHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmploymentHistoryFindFirstOrThrowArgs} args - Arguments to find a EmploymentHistory
     * @example
     * // Get one EmploymentHistory
     * const employmentHistory = await prisma.employmentHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmploymentHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, EmploymentHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmploymentHistoryClient<$Result.GetResult<Prisma.$EmploymentHistoryPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more EmploymentHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmploymentHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmploymentHistories
     * const employmentHistories = await prisma.employmentHistory.findMany()
     * 
     * // Get first 10 EmploymentHistories
     * const employmentHistories = await prisma.employmentHistory.findMany({ take: 10 })
     * 
     * // Only select the `employment_id`
     * const employmentHistoryWithEmployment_idOnly = await prisma.employmentHistory.findMany({ select: { employment_id: true } })
     * 
     */
    findMany<T extends EmploymentHistoryFindManyArgs>(args?: SelectSubset<T, EmploymentHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmploymentHistoryPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a EmploymentHistory.
     * @param {EmploymentHistoryCreateArgs} args - Arguments to create a EmploymentHistory.
     * @example
     * // Create one EmploymentHistory
     * const EmploymentHistory = await prisma.employmentHistory.create({
     *   data: {
     *     // ... data to create a EmploymentHistory
     *   }
     * })
     * 
     */
    create<T extends EmploymentHistoryCreateArgs>(args: SelectSubset<T, EmploymentHistoryCreateArgs<ExtArgs>>): Prisma__EmploymentHistoryClient<$Result.GetResult<Prisma.$EmploymentHistoryPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many EmploymentHistories.
     * @param {EmploymentHistoryCreateManyArgs} args - Arguments to create many EmploymentHistories.
     * @example
     * // Create many EmploymentHistories
     * const employmentHistory = await prisma.employmentHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmploymentHistoryCreateManyArgs>(args?: SelectSubset<T, EmploymentHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmploymentHistories and returns the data saved in the database.
     * @param {EmploymentHistoryCreateManyAndReturnArgs} args - Arguments to create many EmploymentHistories.
     * @example
     * // Create many EmploymentHistories
     * const employmentHistory = await prisma.employmentHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmploymentHistories and only return the `employment_id`
     * const employmentHistoryWithEmployment_idOnly = await prisma.employmentHistory.createManyAndReturn({
     *   select: { employment_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmploymentHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, EmploymentHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmploymentHistoryPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a EmploymentHistory.
     * @param {EmploymentHistoryDeleteArgs} args - Arguments to delete one EmploymentHistory.
     * @example
     * // Delete one EmploymentHistory
     * const EmploymentHistory = await prisma.employmentHistory.delete({
     *   where: {
     *     // ... filter to delete one EmploymentHistory
     *   }
     * })
     * 
     */
    delete<T extends EmploymentHistoryDeleteArgs>(args: SelectSubset<T, EmploymentHistoryDeleteArgs<ExtArgs>>): Prisma__EmploymentHistoryClient<$Result.GetResult<Prisma.$EmploymentHistoryPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one EmploymentHistory.
     * @param {EmploymentHistoryUpdateArgs} args - Arguments to update one EmploymentHistory.
     * @example
     * // Update one EmploymentHistory
     * const employmentHistory = await prisma.employmentHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmploymentHistoryUpdateArgs>(args: SelectSubset<T, EmploymentHistoryUpdateArgs<ExtArgs>>): Prisma__EmploymentHistoryClient<$Result.GetResult<Prisma.$EmploymentHistoryPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more EmploymentHistories.
     * @param {EmploymentHistoryDeleteManyArgs} args - Arguments to filter EmploymentHistories to delete.
     * @example
     * // Delete a few EmploymentHistories
     * const { count } = await prisma.employmentHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmploymentHistoryDeleteManyArgs>(args?: SelectSubset<T, EmploymentHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmploymentHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmploymentHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmploymentHistories
     * const employmentHistory = await prisma.employmentHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmploymentHistoryUpdateManyArgs>(args: SelectSubset<T, EmploymentHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmploymentHistories and returns the data updated in the database.
     * @param {EmploymentHistoryUpdateManyAndReturnArgs} args - Arguments to update many EmploymentHistories.
     * @example
     * // Update many EmploymentHistories
     * const employmentHistory = await prisma.employmentHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmploymentHistories and only return the `employment_id`
     * const employmentHistoryWithEmployment_idOnly = await prisma.employmentHistory.updateManyAndReturn({
     *   select: { employment_id: true },
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
    updateManyAndReturn<T extends EmploymentHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, EmploymentHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmploymentHistoryPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one EmploymentHistory.
     * @param {EmploymentHistoryUpsertArgs} args - Arguments to update or create a EmploymentHistory.
     * @example
     * // Update or create a EmploymentHistory
     * const employmentHistory = await prisma.employmentHistory.upsert({
     *   create: {
     *     // ... data to create a EmploymentHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmploymentHistory we want to update
     *   }
     * })
     */
    upsert<T extends EmploymentHistoryUpsertArgs>(args: SelectSubset<T, EmploymentHistoryUpsertArgs<ExtArgs>>): Prisma__EmploymentHistoryClient<$Result.GetResult<Prisma.$EmploymentHistoryPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of EmploymentHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmploymentHistoryCountArgs} args - Arguments to filter EmploymentHistories to count.
     * @example
     * // Count the number of EmploymentHistories
     * const count = await prisma.employmentHistory.count({
     *   where: {
     *     // ... the filter for the EmploymentHistories we want to count
     *   }
     * })
    **/
    count<T extends EmploymentHistoryCountArgs>(
      args?: Subset<T, EmploymentHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmploymentHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmploymentHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmploymentHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmploymentHistoryAggregateArgs>(args: Subset<T, EmploymentHistoryAggregateArgs>): Prisma.PrismaPromise<GetEmploymentHistoryAggregateType<T>>

    /**
     * Group by EmploymentHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmploymentHistoryGroupByArgs} args - Group by arguments.
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
      T extends EmploymentHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmploymentHistoryGroupByArgs['orderBy'] }
        : { orderBy?: EmploymentHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmploymentHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmploymentHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmploymentHistory model
   */
  readonly fields: EmploymentHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmploymentHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmploymentHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the EmploymentHistory model
   */ 
  interface EmploymentHistoryFieldRefs {
    readonly employment_id: FieldRef<"EmploymentHistory", 'String'>
    readonly patient_id: FieldRef<"EmploymentHistory", 'String'>
    readonly employer_name: FieldRef<"EmploymentHistory", 'String'>
    readonly job_title: FieldRef<"EmploymentHistory", 'String'>
    readonly start_date: FieldRef<"EmploymentHistory", 'DateTime'>
    readonly end_date: FieldRef<"EmploymentHistory", 'DateTime'>
    readonly employment_status: FieldRef<"EmploymentHistory", 'String'>
    readonly notes: FieldRef<"EmploymentHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EmploymentHistory findUnique
   */
  export type EmploymentHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmploymentHistory
     */
    select?: EmploymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmploymentHistory
     */
    omit?: EmploymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmploymentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which EmploymentHistory to fetch.
     */
    where: EmploymentHistoryWhereUniqueInput
  }

  /**
   * EmploymentHistory findUniqueOrThrow
   */
  export type EmploymentHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmploymentHistory
     */
    select?: EmploymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmploymentHistory
     */
    omit?: EmploymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmploymentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which EmploymentHistory to fetch.
     */
    where: EmploymentHistoryWhereUniqueInput
  }

  /**
   * EmploymentHistory findFirst
   */
  export type EmploymentHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmploymentHistory
     */
    select?: EmploymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmploymentHistory
     */
    omit?: EmploymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmploymentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which EmploymentHistory to fetch.
     */
    where?: EmploymentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmploymentHistories to fetch.
     */
    orderBy?: EmploymentHistoryOrderByWithRelationInput | EmploymentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmploymentHistories.
     */
    cursor?: EmploymentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmploymentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmploymentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmploymentHistories.
     */
    distinct?: EmploymentHistoryScalarFieldEnum | EmploymentHistoryScalarFieldEnum[]
  }

  /**
   * EmploymentHistory findFirstOrThrow
   */
  export type EmploymentHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmploymentHistory
     */
    select?: EmploymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmploymentHistory
     */
    omit?: EmploymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmploymentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which EmploymentHistory to fetch.
     */
    where?: EmploymentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmploymentHistories to fetch.
     */
    orderBy?: EmploymentHistoryOrderByWithRelationInput | EmploymentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmploymentHistories.
     */
    cursor?: EmploymentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmploymentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmploymentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmploymentHistories.
     */
    distinct?: EmploymentHistoryScalarFieldEnum | EmploymentHistoryScalarFieldEnum[]
  }

  /**
   * EmploymentHistory findMany
   */
  export type EmploymentHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmploymentHistory
     */
    select?: EmploymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmploymentHistory
     */
    omit?: EmploymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmploymentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which EmploymentHistories to fetch.
     */
    where?: EmploymentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmploymentHistories to fetch.
     */
    orderBy?: EmploymentHistoryOrderByWithRelationInput | EmploymentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmploymentHistories.
     */
    cursor?: EmploymentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmploymentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmploymentHistories.
     */
    skip?: number
    distinct?: EmploymentHistoryScalarFieldEnum | EmploymentHistoryScalarFieldEnum[]
  }

  /**
   * EmploymentHistory create
   */
  export type EmploymentHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmploymentHistory
     */
    select?: EmploymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmploymentHistory
     */
    omit?: EmploymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmploymentHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a EmploymentHistory.
     */
    data: XOR<EmploymentHistoryCreateInput, EmploymentHistoryUncheckedCreateInput>
  }

  /**
   * EmploymentHistory createMany
   */
  export type EmploymentHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmploymentHistories.
     */
    data: EmploymentHistoryCreateManyInput | EmploymentHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmploymentHistory createManyAndReturn
   */
  export type EmploymentHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmploymentHistory
     */
    select?: EmploymentHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmploymentHistory
     */
    omit?: EmploymentHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many EmploymentHistories.
     */
    data: EmploymentHistoryCreateManyInput | EmploymentHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmploymentHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmploymentHistory update
   */
  export type EmploymentHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmploymentHistory
     */
    select?: EmploymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmploymentHistory
     */
    omit?: EmploymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmploymentHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a EmploymentHistory.
     */
    data: XOR<EmploymentHistoryUpdateInput, EmploymentHistoryUncheckedUpdateInput>
    /**
     * Choose, which EmploymentHistory to update.
     */
    where: EmploymentHistoryWhereUniqueInput
  }

  /**
   * EmploymentHistory updateMany
   */
  export type EmploymentHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmploymentHistories.
     */
    data: XOR<EmploymentHistoryUpdateManyMutationInput, EmploymentHistoryUncheckedUpdateManyInput>
    /**
     * Filter which EmploymentHistories to update
     */
    where?: EmploymentHistoryWhereInput
    /**
     * Limit how many EmploymentHistories to update.
     */
    limit?: number
  }

  /**
   * EmploymentHistory updateManyAndReturn
   */
  export type EmploymentHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmploymentHistory
     */
    select?: EmploymentHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmploymentHistory
     */
    omit?: EmploymentHistoryOmit<ExtArgs> | null
    /**
     * The data used to update EmploymentHistories.
     */
    data: XOR<EmploymentHistoryUpdateManyMutationInput, EmploymentHistoryUncheckedUpdateManyInput>
    /**
     * Filter which EmploymentHistories to update
     */
    where?: EmploymentHistoryWhereInput
    /**
     * Limit how many EmploymentHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmploymentHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmploymentHistory upsert
   */
  export type EmploymentHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmploymentHistory
     */
    select?: EmploymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmploymentHistory
     */
    omit?: EmploymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmploymentHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the EmploymentHistory to update in case it exists.
     */
    where: EmploymentHistoryWhereUniqueInput
    /**
     * In case the EmploymentHistory found by the `where` argument doesn't exist, create a new EmploymentHistory with this data.
     */
    create: XOR<EmploymentHistoryCreateInput, EmploymentHistoryUncheckedCreateInput>
    /**
     * In case the EmploymentHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmploymentHistoryUpdateInput, EmploymentHistoryUncheckedUpdateInput>
  }

  /**
   * EmploymentHistory delete
   */
  export type EmploymentHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmploymentHistory
     */
    select?: EmploymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmploymentHistory
     */
    omit?: EmploymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmploymentHistoryInclude<ExtArgs> | null
    /**
     * Filter which EmploymentHistory to delete.
     */
    where: EmploymentHistoryWhereUniqueInput
  }

  /**
   * EmploymentHistory deleteMany
   */
  export type EmploymentHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmploymentHistories to delete
     */
    where?: EmploymentHistoryWhereInput
    /**
     * Limit how many EmploymentHistories to delete.
     */
    limit?: number
  }

  /**
   * EmploymentHistory without action
   */
  export type EmploymentHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmploymentHistory
     */
    select?: EmploymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmploymentHistory
     */
    omit?: EmploymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmploymentHistoryInclude<ExtArgs> | null
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


  export const PatientScalarFieldEnum: {
    patient_id: 'patient_id',
    owner_id: 'owner_id',
    first_name: 'first_name',
    middle_name: 'middle_name',
    last_name: 'last_name',
    date_of_birth: 'date_of_birth',
    gender: 'gender',
    nationality: 'nationality',
    ethnicity: 'ethnicity',
    place_of_birth: 'place_of_birth',
    id_type: 'id_type',
    government_id: 'government_id',
    contact_phone: 'contact_phone',
    contact_email: 'contact_email',
    address_line1: 'address_line1',
    address_line2: 'address_line2',
    city: 'city',
    parish: 'parish',
    postal_code: 'postal_code',
    country: 'country',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const MedicalRecordScalarFieldEnum: {
    record_id: 'record_id',
    patient_id: 'patient_id',
    visit_date: 'visit_date',
    provider: 'provider',
    visit_reason: 'visit_reason',
    diagnosis: 'diagnosis',
    treatment: 'treatment',
    medications: 'medications',
    allergies: 'allergies',
    vaccination_status: 'vaccination_status',
    notes: 'notes'
  };

  export type MedicalRecordScalarFieldEnum = (typeof MedicalRecordScalarFieldEnum)[keyof typeof MedicalRecordScalarFieldEnum]


  export const EducationHistoryScalarFieldEnum: {
    education_id: 'education_id',
    patient_id: 'patient_id',
    institution_names: 'institution_names',
    qualification: 'qualification',
    start_date: 'start_date',
    end_date: 'end_date',
    notes: 'notes'
  };

  export type EducationHistoryScalarFieldEnum = (typeof EducationHistoryScalarFieldEnum)[keyof typeof EducationHistoryScalarFieldEnum]


  export const EmploymentHistoryScalarFieldEnum: {
    employment_id: 'employment_id',
    patient_id: 'patient_id',
    employer_name: 'employer_name',
    job_title: 'job_title',
    start_date: 'start_date',
    end_date: 'end_date',
    employment_status: 'employment_status',
    notes: 'notes'
  };

  export type EmploymentHistoryScalarFieldEnum = (typeof EmploymentHistoryScalarFieldEnum)[keyof typeof EmploymentHistoryScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    patient_id?: StringFilter<"Patient"> | string
    owner_id?: StringFilter<"Patient"> | string
    first_name?: StringFilter<"Patient"> | string
    middle_name?: StringNullableFilter<"Patient"> | string | null
    last_name?: StringFilter<"Patient"> | string
    date_of_birth?: DateTimeFilter<"Patient"> | Date | string
    gender?: StringFilter<"Patient"> | string
    nationality?: StringFilter<"Patient"> | string
    ethnicity?: StringNullableFilter<"Patient"> | string | null
    place_of_birth?: StringFilter<"Patient"> | string
    id_type?: StringFilter<"Patient"> | string
    government_id?: StringFilter<"Patient"> | string
    contact_phone?: StringNullableFilter<"Patient"> | string | null
    contact_email?: StringNullableFilter<"Patient"> | string | null
    address_line1?: StringFilter<"Patient"> | string
    address_line2?: StringNullableFilter<"Patient"> | string | null
    city?: StringFilter<"Patient"> | string
    parish?: StringFilter<"Patient"> | string
    postal_code?: StringNullableFilter<"Patient"> | string | null
    country?: StringFilter<"Patient"> | string
    created_at?: DateTimeFilter<"Patient"> | Date | string
    updated_at?: DateTimeFilter<"Patient"> | Date | string
    medicalRecords?: MedicalRecordListRelationFilter
    educationHistory?: EducationHistoryListRelationFilter
    employmentHistory?: EmploymentHistoryListRelationFilter
  }

  export type PatientOrderByWithRelationInput = {
    patient_id?: SortOrder
    owner_id?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrderInput | SortOrder
    last_name?: SortOrder
    date_of_birth?: SortOrder
    gender?: SortOrder
    nationality?: SortOrder
    ethnicity?: SortOrderInput | SortOrder
    place_of_birth?: SortOrder
    id_type?: SortOrder
    government_id?: SortOrder
    contact_phone?: SortOrderInput | SortOrder
    contact_email?: SortOrderInput | SortOrder
    address_line1?: SortOrder
    address_line2?: SortOrderInput | SortOrder
    city?: SortOrder
    parish?: SortOrder
    postal_code?: SortOrderInput | SortOrder
    country?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    medicalRecords?: MedicalRecordOrderByRelationAggregateInput
    educationHistory?: EducationHistoryOrderByRelationAggregateInput
    employmentHistory?: EmploymentHistoryOrderByRelationAggregateInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    patient_id?: string
    owner_id?: string
    government_id?: string
    contact_email?: string
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    first_name?: StringFilter<"Patient"> | string
    middle_name?: StringNullableFilter<"Patient"> | string | null
    last_name?: StringFilter<"Patient"> | string
    date_of_birth?: DateTimeFilter<"Patient"> | Date | string
    gender?: StringFilter<"Patient"> | string
    nationality?: StringFilter<"Patient"> | string
    ethnicity?: StringNullableFilter<"Patient"> | string | null
    place_of_birth?: StringFilter<"Patient"> | string
    id_type?: StringFilter<"Patient"> | string
    contact_phone?: StringNullableFilter<"Patient"> | string | null
    address_line1?: StringFilter<"Patient"> | string
    address_line2?: StringNullableFilter<"Patient"> | string | null
    city?: StringFilter<"Patient"> | string
    parish?: StringFilter<"Patient"> | string
    postal_code?: StringNullableFilter<"Patient"> | string | null
    country?: StringFilter<"Patient"> | string
    created_at?: DateTimeFilter<"Patient"> | Date | string
    updated_at?: DateTimeFilter<"Patient"> | Date | string
    medicalRecords?: MedicalRecordListRelationFilter
    educationHistory?: EducationHistoryListRelationFilter
    employmentHistory?: EmploymentHistoryListRelationFilter
  }, "patient_id" | "owner_id" | "government_id" | "contact_email">

  export type PatientOrderByWithAggregationInput = {
    patient_id?: SortOrder
    owner_id?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrderInput | SortOrder
    last_name?: SortOrder
    date_of_birth?: SortOrder
    gender?: SortOrder
    nationality?: SortOrder
    ethnicity?: SortOrderInput | SortOrder
    place_of_birth?: SortOrder
    id_type?: SortOrder
    government_id?: SortOrder
    contact_phone?: SortOrderInput | SortOrder
    contact_email?: SortOrderInput | SortOrder
    address_line1?: SortOrder
    address_line2?: SortOrderInput | SortOrder
    city?: SortOrder
    parish?: SortOrder
    postal_code?: SortOrderInput | SortOrder
    country?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PatientCountOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    patient_id?: StringWithAggregatesFilter<"Patient"> | string
    owner_id?: StringWithAggregatesFilter<"Patient"> | string
    first_name?: StringWithAggregatesFilter<"Patient"> | string
    middle_name?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    last_name?: StringWithAggregatesFilter<"Patient"> | string
    date_of_birth?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    gender?: StringWithAggregatesFilter<"Patient"> | string
    nationality?: StringWithAggregatesFilter<"Patient"> | string
    ethnicity?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    place_of_birth?: StringWithAggregatesFilter<"Patient"> | string
    id_type?: StringWithAggregatesFilter<"Patient"> | string
    government_id?: StringWithAggregatesFilter<"Patient"> | string
    contact_phone?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    contact_email?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    address_line1?: StringWithAggregatesFilter<"Patient"> | string
    address_line2?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    city?: StringWithAggregatesFilter<"Patient"> | string
    parish?: StringWithAggregatesFilter<"Patient"> | string
    postal_code?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    country?: StringWithAggregatesFilter<"Patient"> | string
    created_at?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
  }

  export type MedicalRecordWhereInput = {
    AND?: MedicalRecordWhereInput | MedicalRecordWhereInput[]
    OR?: MedicalRecordWhereInput[]
    NOT?: MedicalRecordWhereInput | MedicalRecordWhereInput[]
    record_id?: StringFilter<"MedicalRecord"> | string
    patient_id?: StringFilter<"MedicalRecord"> | string
    visit_date?: DateTimeFilter<"MedicalRecord"> | Date | string
    provider?: StringFilter<"MedicalRecord"> | string
    visit_reason?: StringFilter<"MedicalRecord"> | string
    diagnosis?: StringNullableFilter<"MedicalRecord"> | string | null
    treatment?: StringNullableFilter<"MedicalRecord"> | string | null
    medications?: StringNullableFilter<"MedicalRecord"> | string | null
    allergies?: StringNullableFilter<"MedicalRecord"> | string | null
    vaccination_status?: StringNullableFilter<"MedicalRecord"> | string | null
    notes?: StringNullableFilter<"MedicalRecord"> | string | null
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }

  export type MedicalRecordOrderByWithRelationInput = {
    record_id?: SortOrder
    patient_id?: SortOrder
    visit_date?: SortOrder
    provider?: SortOrder
    visit_reason?: SortOrder
    diagnosis?: SortOrderInput | SortOrder
    treatment?: SortOrderInput | SortOrder
    medications?: SortOrderInput | SortOrder
    allergies?: SortOrderInput | SortOrder
    vaccination_status?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    patient?: PatientOrderByWithRelationInput
  }

  export type MedicalRecordWhereUniqueInput = Prisma.AtLeast<{
    record_id?: string
    AND?: MedicalRecordWhereInput | MedicalRecordWhereInput[]
    OR?: MedicalRecordWhereInput[]
    NOT?: MedicalRecordWhereInput | MedicalRecordWhereInput[]
    patient_id?: StringFilter<"MedicalRecord"> | string
    visit_date?: DateTimeFilter<"MedicalRecord"> | Date | string
    provider?: StringFilter<"MedicalRecord"> | string
    visit_reason?: StringFilter<"MedicalRecord"> | string
    diagnosis?: StringNullableFilter<"MedicalRecord"> | string | null
    treatment?: StringNullableFilter<"MedicalRecord"> | string | null
    medications?: StringNullableFilter<"MedicalRecord"> | string | null
    allergies?: StringNullableFilter<"MedicalRecord"> | string | null
    vaccination_status?: StringNullableFilter<"MedicalRecord"> | string | null
    notes?: StringNullableFilter<"MedicalRecord"> | string | null
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }, "record_id">

  export type MedicalRecordOrderByWithAggregationInput = {
    record_id?: SortOrder
    patient_id?: SortOrder
    visit_date?: SortOrder
    provider?: SortOrder
    visit_reason?: SortOrder
    diagnosis?: SortOrderInput | SortOrder
    treatment?: SortOrderInput | SortOrder
    medications?: SortOrderInput | SortOrder
    allergies?: SortOrderInput | SortOrder
    vaccination_status?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: MedicalRecordCountOrderByAggregateInput
    _max?: MedicalRecordMaxOrderByAggregateInput
    _min?: MedicalRecordMinOrderByAggregateInput
  }

  export type MedicalRecordScalarWhereWithAggregatesInput = {
    AND?: MedicalRecordScalarWhereWithAggregatesInput | MedicalRecordScalarWhereWithAggregatesInput[]
    OR?: MedicalRecordScalarWhereWithAggregatesInput[]
    NOT?: MedicalRecordScalarWhereWithAggregatesInput | MedicalRecordScalarWhereWithAggregatesInput[]
    record_id?: StringWithAggregatesFilter<"MedicalRecord"> | string
    patient_id?: StringWithAggregatesFilter<"MedicalRecord"> | string
    visit_date?: DateTimeWithAggregatesFilter<"MedicalRecord"> | Date | string
    provider?: StringWithAggregatesFilter<"MedicalRecord"> | string
    visit_reason?: StringWithAggregatesFilter<"MedicalRecord"> | string
    diagnosis?: StringNullableWithAggregatesFilter<"MedicalRecord"> | string | null
    treatment?: StringNullableWithAggregatesFilter<"MedicalRecord"> | string | null
    medications?: StringNullableWithAggregatesFilter<"MedicalRecord"> | string | null
    allergies?: StringNullableWithAggregatesFilter<"MedicalRecord"> | string | null
    vaccination_status?: StringNullableWithAggregatesFilter<"MedicalRecord"> | string | null
    notes?: StringNullableWithAggregatesFilter<"MedicalRecord"> | string | null
  }

  export type EducationHistoryWhereInput = {
    AND?: EducationHistoryWhereInput | EducationHistoryWhereInput[]
    OR?: EducationHistoryWhereInput[]
    NOT?: EducationHistoryWhereInput | EducationHistoryWhereInput[]
    education_id?: StringFilter<"EducationHistory"> | string
    patient_id?: StringFilter<"EducationHistory"> | string
    institution_names?: StringFilter<"EducationHistory"> | string
    qualification?: StringFilter<"EducationHistory"> | string
    start_date?: DateTimeFilter<"EducationHistory"> | Date | string
    end_date?: DateTimeNullableFilter<"EducationHistory"> | Date | string | null
    notes?: StringNullableFilter<"EducationHistory"> | string | null
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }

  export type EducationHistoryOrderByWithRelationInput = {
    education_id?: SortOrder
    patient_id?: SortOrder
    institution_names?: SortOrder
    qualification?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    patient?: PatientOrderByWithRelationInput
  }

  export type EducationHistoryWhereUniqueInput = Prisma.AtLeast<{
    education_id?: string
    AND?: EducationHistoryWhereInput | EducationHistoryWhereInput[]
    OR?: EducationHistoryWhereInput[]
    NOT?: EducationHistoryWhereInput | EducationHistoryWhereInput[]
    patient_id?: StringFilter<"EducationHistory"> | string
    institution_names?: StringFilter<"EducationHistory"> | string
    qualification?: StringFilter<"EducationHistory"> | string
    start_date?: DateTimeFilter<"EducationHistory"> | Date | string
    end_date?: DateTimeNullableFilter<"EducationHistory"> | Date | string | null
    notes?: StringNullableFilter<"EducationHistory"> | string | null
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }, "education_id">

  export type EducationHistoryOrderByWithAggregationInput = {
    education_id?: SortOrder
    patient_id?: SortOrder
    institution_names?: SortOrder
    qualification?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: EducationHistoryCountOrderByAggregateInput
    _max?: EducationHistoryMaxOrderByAggregateInput
    _min?: EducationHistoryMinOrderByAggregateInput
  }

  export type EducationHistoryScalarWhereWithAggregatesInput = {
    AND?: EducationHistoryScalarWhereWithAggregatesInput | EducationHistoryScalarWhereWithAggregatesInput[]
    OR?: EducationHistoryScalarWhereWithAggregatesInput[]
    NOT?: EducationHistoryScalarWhereWithAggregatesInput | EducationHistoryScalarWhereWithAggregatesInput[]
    education_id?: StringWithAggregatesFilter<"EducationHistory"> | string
    patient_id?: StringWithAggregatesFilter<"EducationHistory"> | string
    institution_names?: StringWithAggregatesFilter<"EducationHistory"> | string
    qualification?: StringWithAggregatesFilter<"EducationHistory"> | string
    start_date?: DateTimeWithAggregatesFilter<"EducationHistory"> | Date | string
    end_date?: DateTimeNullableWithAggregatesFilter<"EducationHistory"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"EducationHistory"> | string | null
  }

  export type EmploymentHistoryWhereInput = {
    AND?: EmploymentHistoryWhereInput | EmploymentHistoryWhereInput[]
    OR?: EmploymentHistoryWhereInput[]
    NOT?: EmploymentHistoryWhereInput | EmploymentHistoryWhereInput[]
    employment_id?: StringFilter<"EmploymentHistory"> | string
    patient_id?: StringFilter<"EmploymentHistory"> | string
    employer_name?: StringFilter<"EmploymentHistory"> | string
    job_title?: StringFilter<"EmploymentHistory"> | string
    start_date?: DateTimeFilter<"EmploymentHistory"> | Date | string
    end_date?: DateTimeNullableFilter<"EmploymentHistory"> | Date | string | null
    employment_status?: StringFilter<"EmploymentHistory"> | string
    notes?: StringNullableFilter<"EmploymentHistory"> | string | null
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }

  export type EmploymentHistoryOrderByWithRelationInput = {
    employment_id?: SortOrder
    patient_id?: SortOrder
    employer_name?: SortOrder
    job_title?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrderInput | SortOrder
    employment_status?: SortOrder
    notes?: SortOrderInput | SortOrder
    patient?: PatientOrderByWithRelationInput
  }

  export type EmploymentHistoryWhereUniqueInput = Prisma.AtLeast<{
    employment_id?: string
    AND?: EmploymentHistoryWhereInput | EmploymentHistoryWhereInput[]
    OR?: EmploymentHistoryWhereInput[]
    NOT?: EmploymentHistoryWhereInput | EmploymentHistoryWhereInput[]
    patient_id?: StringFilter<"EmploymentHistory"> | string
    employer_name?: StringFilter<"EmploymentHistory"> | string
    job_title?: StringFilter<"EmploymentHistory"> | string
    start_date?: DateTimeFilter<"EmploymentHistory"> | Date | string
    end_date?: DateTimeNullableFilter<"EmploymentHistory"> | Date | string | null
    employment_status?: StringFilter<"EmploymentHistory"> | string
    notes?: StringNullableFilter<"EmploymentHistory"> | string | null
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }, "employment_id">

  export type EmploymentHistoryOrderByWithAggregationInput = {
    employment_id?: SortOrder
    patient_id?: SortOrder
    employer_name?: SortOrder
    job_title?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrderInput | SortOrder
    employment_status?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: EmploymentHistoryCountOrderByAggregateInput
    _max?: EmploymentHistoryMaxOrderByAggregateInput
    _min?: EmploymentHistoryMinOrderByAggregateInput
  }

  export type EmploymentHistoryScalarWhereWithAggregatesInput = {
    AND?: EmploymentHistoryScalarWhereWithAggregatesInput | EmploymentHistoryScalarWhereWithAggregatesInput[]
    OR?: EmploymentHistoryScalarWhereWithAggregatesInput[]
    NOT?: EmploymentHistoryScalarWhereWithAggregatesInput | EmploymentHistoryScalarWhereWithAggregatesInput[]
    employment_id?: StringWithAggregatesFilter<"EmploymentHistory"> | string
    patient_id?: StringWithAggregatesFilter<"EmploymentHistory"> | string
    employer_name?: StringWithAggregatesFilter<"EmploymentHistory"> | string
    job_title?: StringWithAggregatesFilter<"EmploymentHistory"> | string
    start_date?: DateTimeWithAggregatesFilter<"EmploymentHistory"> | Date | string
    end_date?: DateTimeNullableWithAggregatesFilter<"EmploymentHistory"> | Date | string | null
    employment_status?: StringWithAggregatesFilter<"EmploymentHistory"> | string
    notes?: StringNullableWithAggregatesFilter<"EmploymentHistory"> | string | null
  }

  export type PatientCreateInput = {
    patient_id?: string
    owner_id: string
    first_name: string
    middle_name?: string | null
    last_name: string
    date_of_birth: Date | string
    gender: string
    nationality: string
    ethnicity?: string | null
    place_of_birth: string
    id_type: string
    government_id: string
    contact_phone?: string | null
    contact_email?: string | null
    address_line1: string
    address_line2?: string | null
    city: string
    parish: string
    postal_code?: string | null
    country: string
    created_at?: Date | string
    updated_at?: Date | string
    medicalRecords?: MedicalRecordCreateNestedManyWithoutPatientInput
    educationHistory?: EducationHistoryCreateNestedManyWithoutPatientInput
    employmentHistory?: EmploymentHistoryCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    patient_id?: string
    owner_id: string
    first_name: string
    middle_name?: string | null
    last_name: string
    date_of_birth: Date | string
    gender: string
    nationality: string
    ethnicity?: string | null
    place_of_birth: string
    id_type: string
    government_id: string
    contact_phone?: string | null
    contact_email?: string | null
    address_line1: string
    address_line2?: string | null
    city: string
    parish: string
    postal_code?: string | null
    country: string
    created_at?: Date | string
    updated_at?: Date | string
    medicalRecords?: MedicalRecordUncheckedCreateNestedManyWithoutPatientInput
    educationHistory?: EducationHistoryUncheckedCreateNestedManyWithoutPatientInput
    employmentHistory?: EmploymentHistoryUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientUpdateInput = {
    patient_id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    place_of_birth?: StringFieldUpdateOperationsInput | string
    id_type?: StringFieldUpdateOperationsInput | string
    government_id?: StringFieldUpdateOperationsInput | string
    contact_phone?: NullableStringFieldUpdateOperationsInput | string | null
    contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    address_line1?: StringFieldUpdateOperationsInput | string
    address_line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    parish?: StringFieldUpdateOperationsInput | string
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalRecords?: MedicalRecordUpdateManyWithoutPatientNestedInput
    educationHistory?: EducationHistoryUpdateManyWithoutPatientNestedInput
    employmentHistory?: EmploymentHistoryUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    patient_id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    place_of_birth?: StringFieldUpdateOperationsInput | string
    id_type?: StringFieldUpdateOperationsInput | string
    government_id?: StringFieldUpdateOperationsInput | string
    contact_phone?: NullableStringFieldUpdateOperationsInput | string | null
    contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    address_line1?: StringFieldUpdateOperationsInput | string
    address_line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    parish?: StringFieldUpdateOperationsInput | string
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalRecords?: MedicalRecordUncheckedUpdateManyWithoutPatientNestedInput
    educationHistory?: EducationHistoryUncheckedUpdateManyWithoutPatientNestedInput
    employmentHistory?: EmploymentHistoryUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    patient_id?: string
    owner_id: string
    first_name: string
    middle_name?: string | null
    last_name: string
    date_of_birth: Date | string
    gender: string
    nationality: string
    ethnicity?: string | null
    place_of_birth: string
    id_type: string
    government_id: string
    contact_phone?: string | null
    contact_email?: string | null
    address_line1: string
    address_line2?: string | null
    city: string
    parish: string
    postal_code?: string | null
    country: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PatientUpdateManyMutationInput = {
    patient_id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    place_of_birth?: StringFieldUpdateOperationsInput | string
    id_type?: StringFieldUpdateOperationsInput | string
    government_id?: StringFieldUpdateOperationsInput | string
    contact_phone?: NullableStringFieldUpdateOperationsInput | string | null
    contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    address_line1?: StringFieldUpdateOperationsInput | string
    address_line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    parish?: StringFieldUpdateOperationsInput | string
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUncheckedUpdateManyInput = {
    patient_id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    place_of_birth?: StringFieldUpdateOperationsInput | string
    id_type?: StringFieldUpdateOperationsInput | string
    government_id?: StringFieldUpdateOperationsInput | string
    contact_phone?: NullableStringFieldUpdateOperationsInput | string | null
    contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    address_line1?: StringFieldUpdateOperationsInput | string
    address_line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    parish?: StringFieldUpdateOperationsInput | string
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalRecordCreateInput = {
    record_id?: string
    visit_date: Date | string
    provider: string
    visit_reason: string
    diagnosis?: string | null
    treatment?: string | null
    medications?: string | null
    allergies?: string | null
    vaccination_status?: string | null
    notes?: string | null
    patient: PatientCreateNestedOneWithoutMedicalRecordsInput
  }

  export type MedicalRecordUncheckedCreateInput = {
    record_id?: string
    patient_id: string
    visit_date: Date | string
    provider: string
    visit_reason: string
    diagnosis?: string | null
    treatment?: string | null
    medications?: string | null
    allergies?: string | null
    vaccination_status?: string | null
    notes?: string | null
  }

  export type MedicalRecordUpdateInput = {
    record_id?: StringFieldUpdateOperationsInput | string
    visit_date?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: StringFieldUpdateOperationsInput | string
    visit_reason?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    treatment?: NullableStringFieldUpdateOperationsInput | string | null
    medications?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    vaccination_status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    patient?: PatientUpdateOneRequiredWithoutMedicalRecordsNestedInput
  }

  export type MedicalRecordUncheckedUpdateInput = {
    record_id?: StringFieldUpdateOperationsInput | string
    patient_id?: StringFieldUpdateOperationsInput | string
    visit_date?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: StringFieldUpdateOperationsInput | string
    visit_reason?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    treatment?: NullableStringFieldUpdateOperationsInput | string | null
    medications?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    vaccination_status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicalRecordCreateManyInput = {
    record_id?: string
    patient_id: string
    visit_date: Date | string
    provider: string
    visit_reason: string
    diagnosis?: string | null
    treatment?: string | null
    medications?: string | null
    allergies?: string | null
    vaccination_status?: string | null
    notes?: string | null
  }

  export type MedicalRecordUpdateManyMutationInput = {
    record_id?: StringFieldUpdateOperationsInput | string
    visit_date?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: StringFieldUpdateOperationsInput | string
    visit_reason?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    treatment?: NullableStringFieldUpdateOperationsInput | string | null
    medications?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    vaccination_status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicalRecordUncheckedUpdateManyInput = {
    record_id?: StringFieldUpdateOperationsInput | string
    patient_id?: StringFieldUpdateOperationsInput | string
    visit_date?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: StringFieldUpdateOperationsInput | string
    visit_reason?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    treatment?: NullableStringFieldUpdateOperationsInput | string | null
    medications?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    vaccination_status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationHistoryCreateInput = {
    education_id?: string
    institution_names: string
    qualification: string
    start_date: Date | string
    end_date?: Date | string | null
    notes?: string | null
    patient: PatientCreateNestedOneWithoutEducationHistoryInput
  }

  export type EducationHistoryUncheckedCreateInput = {
    education_id?: string
    patient_id: string
    institution_names: string
    qualification: string
    start_date: Date | string
    end_date?: Date | string | null
    notes?: string | null
  }

  export type EducationHistoryUpdateInput = {
    education_id?: StringFieldUpdateOperationsInput | string
    institution_names?: StringFieldUpdateOperationsInput | string
    qualification?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    patient?: PatientUpdateOneRequiredWithoutEducationHistoryNestedInput
  }

  export type EducationHistoryUncheckedUpdateInput = {
    education_id?: StringFieldUpdateOperationsInput | string
    patient_id?: StringFieldUpdateOperationsInput | string
    institution_names?: StringFieldUpdateOperationsInput | string
    qualification?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationHistoryCreateManyInput = {
    education_id?: string
    patient_id: string
    institution_names: string
    qualification: string
    start_date: Date | string
    end_date?: Date | string | null
    notes?: string | null
  }

  export type EducationHistoryUpdateManyMutationInput = {
    education_id?: StringFieldUpdateOperationsInput | string
    institution_names?: StringFieldUpdateOperationsInput | string
    qualification?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationHistoryUncheckedUpdateManyInput = {
    education_id?: StringFieldUpdateOperationsInput | string
    patient_id?: StringFieldUpdateOperationsInput | string
    institution_names?: StringFieldUpdateOperationsInput | string
    qualification?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmploymentHistoryCreateInput = {
    employment_id?: string
    employer_name: string
    job_title: string
    start_date: Date | string
    end_date?: Date | string | null
    employment_status: string
    notes?: string | null
    patient: PatientCreateNestedOneWithoutEmploymentHistoryInput
  }

  export type EmploymentHistoryUncheckedCreateInput = {
    employment_id?: string
    patient_id: string
    employer_name: string
    job_title: string
    start_date: Date | string
    end_date?: Date | string | null
    employment_status: string
    notes?: string | null
  }

  export type EmploymentHistoryUpdateInput = {
    employment_id?: StringFieldUpdateOperationsInput | string
    employer_name?: StringFieldUpdateOperationsInput | string
    job_title?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employment_status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    patient?: PatientUpdateOneRequiredWithoutEmploymentHistoryNestedInput
  }

  export type EmploymentHistoryUncheckedUpdateInput = {
    employment_id?: StringFieldUpdateOperationsInput | string
    patient_id?: StringFieldUpdateOperationsInput | string
    employer_name?: StringFieldUpdateOperationsInput | string
    job_title?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employment_status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmploymentHistoryCreateManyInput = {
    employment_id?: string
    patient_id: string
    employer_name: string
    job_title: string
    start_date: Date | string
    end_date?: Date | string | null
    employment_status: string
    notes?: string | null
  }

  export type EmploymentHistoryUpdateManyMutationInput = {
    employment_id?: StringFieldUpdateOperationsInput | string
    employer_name?: StringFieldUpdateOperationsInput | string
    job_title?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employment_status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmploymentHistoryUncheckedUpdateManyInput = {
    employment_id?: StringFieldUpdateOperationsInput | string
    patient_id?: StringFieldUpdateOperationsInput | string
    employer_name?: StringFieldUpdateOperationsInput | string
    job_title?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employment_status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MedicalRecordListRelationFilter = {
    every?: MedicalRecordWhereInput
    some?: MedicalRecordWhereInput
    none?: MedicalRecordWhereInput
  }

  export type EducationHistoryListRelationFilter = {
    every?: EducationHistoryWhereInput
    some?: EducationHistoryWhereInput
    none?: EducationHistoryWhereInput
  }

  export type EmploymentHistoryListRelationFilter = {
    every?: EmploymentHistoryWhereInput
    some?: EmploymentHistoryWhereInput
    none?: EmploymentHistoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MedicalRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EducationHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmploymentHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientCountOrderByAggregateInput = {
    patient_id?: SortOrder
    owner_id?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrder
    last_name?: SortOrder
    date_of_birth?: SortOrder
    gender?: SortOrder
    nationality?: SortOrder
    ethnicity?: SortOrder
    place_of_birth?: SortOrder
    id_type?: SortOrder
    government_id?: SortOrder
    contact_phone?: SortOrder
    contact_email?: SortOrder
    address_line1?: SortOrder
    address_line2?: SortOrder
    city?: SortOrder
    parish?: SortOrder
    postal_code?: SortOrder
    country?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    patient_id?: SortOrder
    owner_id?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrder
    last_name?: SortOrder
    date_of_birth?: SortOrder
    gender?: SortOrder
    nationality?: SortOrder
    ethnicity?: SortOrder
    place_of_birth?: SortOrder
    id_type?: SortOrder
    government_id?: SortOrder
    contact_phone?: SortOrder
    contact_email?: SortOrder
    address_line1?: SortOrder
    address_line2?: SortOrder
    city?: SortOrder
    parish?: SortOrder
    postal_code?: SortOrder
    country?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    patient_id?: SortOrder
    owner_id?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrder
    last_name?: SortOrder
    date_of_birth?: SortOrder
    gender?: SortOrder
    nationality?: SortOrder
    ethnicity?: SortOrder
    place_of_birth?: SortOrder
    id_type?: SortOrder
    government_id?: SortOrder
    contact_phone?: SortOrder
    contact_email?: SortOrder
    address_line1?: SortOrder
    address_line2?: SortOrder
    city?: SortOrder
    parish?: SortOrder
    postal_code?: SortOrder
    country?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PatientScalarRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type MedicalRecordCountOrderByAggregateInput = {
    record_id?: SortOrder
    patient_id?: SortOrder
    visit_date?: SortOrder
    provider?: SortOrder
    visit_reason?: SortOrder
    diagnosis?: SortOrder
    treatment?: SortOrder
    medications?: SortOrder
    allergies?: SortOrder
    vaccination_status?: SortOrder
    notes?: SortOrder
  }

  export type MedicalRecordMaxOrderByAggregateInput = {
    record_id?: SortOrder
    patient_id?: SortOrder
    visit_date?: SortOrder
    provider?: SortOrder
    visit_reason?: SortOrder
    diagnosis?: SortOrder
    treatment?: SortOrder
    medications?: SortOrder
    allergies?: SortOrder
    vaccination_status?: SortOrder
    notes?: SortOrder
  }

  export type MedicalRecordMinOrderByAggregateInput = {
    record_id?: SortOrder
    patient_id?: SortOrder
    visit_date?: SortOrder
    provider?: SortOrder
    visit_reason?: SortOrder
    diagnosis?: SortOrder
    treatment?: SortOrder
    medications?: SortOrder
    allergies?: SortOrder
    vaccination_status?: SortOrder
    notes?: SortOrder
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

  export type EducationHistoryCountOrderByAggregateInput = {
    education_id?: SortOrder
    patient_id?: SortOrder
    institution_names?: SortOrder
    qualification?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    notes?: SortOrder
  }

  export type EducationHistoryMaxOrderByAggregateInput = {
    education_id?: SortOrder
    patient_id?: SortOrder
    institution_names?: SortOrder
    qualification?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    notes?: SortOrder
  }

  export type EducationHistoryMinOrderByAggregateInput = {
    education_id?: SortOrder
    patient_id?: SortOrder
    institution_names?: SortOrder
    qualification?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    notes?: SortOrder
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

  export type EmploymentHistoryCountOrderByAggregateInput = {
    employment_id?: SortOrder
    patient_id?: SortOrder
    employer_name?: SortOrder
    job_title?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    employment_status?: SortOrder
    notes?: SortOrder
  }

  export type EmploymentHistoryMaxOrderByAggregateInput = {
    employment_id?: SortOrder
    patient_id?: SortOrder
    employer_name?: SortOrder
    job_title?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    employment_status?: SortOrder
    notes?: SortOrder
  }

  export type EmploymentHistoryMinOrderByAggregateInput = {
    employment_id?: SortOrder
    patient_id?: SortOrder
    employer_name?: SortOrder
    job_title?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    employment_status?: SortOrder
    notes?: SortOrder
  }

  export type MedicalRecordCreateNestedManyWithoutPatientInput = {
    create?: XOR<MedicalRecordCreateWithoutPatientInput, MedicalRecordUncheckedCreateWithoutPatientInput> | MedicalRecordCreateWithoutPatientInput[] | MedicalRecordUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutPatientInput | MedicalRecordCreateOrConnectWithoutPatientInput[]
    createMany?: MedicalRecordCreateManyPatientInputEnvelope
    connect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
  }

  export type EducationHistoryCreateNestedManyWithoutPatientInput = {
    create?: XOR<EducationHistoryCreateWithoutPatientInput, EducationHistoryUncheckedCreateWithoutPatientInput> | EducationHistoryCreateWithoutPatientInput[] | EducationHistoryUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: EducationHistoryCreateOrConnectWithoutPatientInput | EducationHistoryCreateOrConnectWithoutPatientInput[]
    createMany?: EducationHistoryCreateManyPatientInputEnvelope
    connect?: EducationHistoryWhereUniqueInput | EducationHistoryWhereUniqueInput[]
  }

  export type EmploymentHistoryCreateNestedManyWithoutPatientInput = {
    create?: XOR<EmploymentHistoryCreateWithoutPatientInput, EmploymentHistoryUncheckedCreateWithoutPatientInput> | EmploymentHistoryCreateWithoutPatientInput[] | EmploymentHistoryUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: EmploymentHistoryCreateOrConnectWithoutPatientInput | EmploymentHistoryCreateOrConnectWithoutPatientInput[]
    createMany?: EmploymentHistoryCreateManyPatientInputEnvelope
    connect?: EmploymentHistoryWhereUniqueInput | EmploymentHistoryWhereUniqueInput[]
  }

  export type MedicalRecordUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<MedicalRecordCreateWithoutPatientInput, MedicalRecordUncheckedCreateWithoutPatientInput> | MedicalRecordCreateWithoutPatientInput[] | MedicalRecordUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutPatientInput | MedicalRecordCreateOrConnectWithoutPatientInput[]
    createMany?: MedicalRecordCreateManyPatientInputEnvelope
    connect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
  }

  export type EducationHistoryUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<EducationHistoryCreateWithoutPatientInput, EducationHistoryUncheckedCreateWithoutPatientInput> | EducationHistoryCreateWithoutPatientInput[] | EducationHistoryUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: EducationHistoryCreateOrConnectWithoutPatientInput | EducationHistoryCreateOrConnectWithoutPatientInput[]
    createMany?: EducationHistoryCreateManyPatientInputEnvelope
    connect?: EducationHistoryWhereUniqueInput | EducationHistoryWhereUniqueInput[]
  }

  export type EmploymentHistoryUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<EmploymentHistoryCreateWithoutPatientInput, EmploymentHistoryUncheckedCreateWithoutPatientInput> | EmploymentHistoryCreateWithoutPatientInput[] | EmploymentHistoryUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: EmploymentHistoryCreateOrConnectWithoutPatientInput | EmploymentHistoryCreateOrConnectWithoutPatientInput[]
    createMany?: EmploymentHistoryCreateManyPatientInputEnvelope
    connect?: EmploymentHistoryWhereUniqueInput | EmploymentHistoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MedicalRecordUpdateManyWithoutPatientNestedInput = {
    create?: XOR<MedicalRecordCreateWithoutPatientInput, MedicalRecordUncheckedCreateWithoutPatientInput> | MedicalRecordCreateWithoutPatientInput[] | MedicalRecordUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutPatientInput | MedicalRecordCreateOrConnectWithoutPatientInput[]
    upsert?: MedicalRecordUpsertWithWhereUniqueWithoutPatientInput | MedicalRecordUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: MedicalRecordCreateManyPatientInputEnvelope
    set?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    disconnect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    delete?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    connect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    update?: MedicalRecordUpdateWithWhereUniqueWithoutPatientInput | MedicalRecordUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: MedicalRecordUpdateManyWithWhereWithoutPatientInput | MedicalRecordUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: MedicalRecordScalarWhereInput | MedicalRecordScalarWhereInput[]
  }

  export type EducationHistoryUpdateManyWithoutPatientNestedInput = {
    create?: XOR<EducationHistoryCreateWithoutPatientInput, EducationHistoryUncheckedCreateWithoutPatientInput> | EducationHistoryCreateWithoutPatientInput[] | EducationHistoryUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: EducationHistoryCreateOrConnectWithoutPatientInput | EducationHistoryCreateOrConnectWithoutPatientInput[]
    upsert?: EducationHistoryUpsertWithWhereUniqueWithoutPatientInput | EducationHistoryUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: EducationHistoryCreateManyPatientInputEnvelope
    set?: EducationHistoryWhereUniqueInput | EducationHistoryWhereUniqueInput[]
    disconnect?: EducationHistoryWhereUniqueInput | EducationHistoryWhereUniqueInput[]
    delete?: EducationHistoryWhereUniqueInput | EducationHistoryWhereUniqueInput[]
    connect?: EducationHistoryWhereUniqueInput | EducationHistoryWhereUniqueInput[]
    update?: EducationHistoryUpdateWithWhereUniqueWithoutPatientInput | EducationHistoryUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: EducationHistoryUpdateManyWithWhereWithoutPatientInput | EducationHistoryUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: EducationHistoryScalarWhereInput | EducationHistoryScalarWhereInput[]
  }

  export type EmploymentHistoryUpdateManyWithoutPatientNestedInput = {
    create?: XOR<EmploymentHistoryCreateWithoutPatientInput, EmploymentHistoryUncheckedCreateWithoutPatientInput> | EmploymentHistoryCreateWithoutPatientInput[] | EmploymentHistoryUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: EmploymentHistoryCreateOrConnectWithoutPatientInput | EmploymentHistoryCreateOrConnectWithoutPatientInput[]
    upsert?: EmploymentHistoryUpsertWithWhereUniqueWithoutPatientInput | EmploymentHistoryUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: EmploymentHistoryCreateManyPatientInputEnvelope
    set?: EmploymentHistoryWhereUniqueInput | EmploymentHistoryWhereUniqueInput[]
    disconnect?: EmploymentHistoryWhereUniqueInput | EmploymentHistoryWhereUniqueInput[]
    delete?: EmploymentHistoryWhereUniqueInput | EmploymentHistoryWhereUniqueInput[]
    connect?: EmploymentHistoryWhereUniqueInput | EmploymentHistoryWhereUniqueInput[]
    update?: EmploymentHistoryUpdateWithWhereUniqueWithoutPatientInput | EmploymentHistoryUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: EmploymentHistoryUpdateManyWithWhereWithoutPatientInput | EmploymentHistoryUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: EmploymentHistoryScalarWhereInput | EmploymentHistoryScalarWhereInput[]
  }

  export type MedicalRecordUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<MedicalRecordCreateWithoutPatientInput, MedicalRecordUncheckedCreateWithoutPatientInput> | MedicalRecordCreateWithoutPatientInput[] | MedicalRecordUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutPatientInput | MedicalRecordCreateOrConnectWithoutPatientInput[]
    upsert?: MedicalRecordUpsertWithWhereUniqueWithoutPatientInput | MedicalRecordUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: MedicalRecordCreateManyPatientInputEnvelope
    set?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    disconnect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    delete?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    connect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    update?: MedicalRecordUpdateWithWhereUniqueWithoutPatientInput | MedicalRecordUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: MedicalRecordUpdateManyWithWhereWithoutPatientInput | MedicalRecordUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: MedicalRecordScalarWhereInput | MedicalRecordScalarWhereInput[]
  }

  export type EducationHistoryUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<EducationHistoryCreateWithoutPatientInput, EducationHistoryUncheckedCreateWithoutPatientInput> | EducationHistoryCreateWithoutPatientInput[] | EducationHistoryUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: EducationHistoryCreateOrConnectWithoutPatientInput | EducationHistoryCreateOrConnectWithoutPatientInput[]
    upsert?: EducationHistoryUpsertWithWhereUniqueWithoutPatientInput | EducationHistoryUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: EducationHistoryCreateManyPatientInputEnvelope
    set?: EducationHistoryWhereUniqueInput | EducationHistoryWhereUniqueInput[]
    disconnect?: EducationHistoryWhereUniqueInput | EducationHistoryWhereUniqueInput[]
    delete?: EducationHistoryWhereUniqueInput | EducationHistoryWhereUniqueInput[]
    connect?: EducationHistoryWhereUniqueInput | EducationHistoryWhereUniqueInput[]
    update?: EducationHistoryUpdateWithWhereUniqueWithoutPatientInput | EducationHistoryUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: EducationHistoryUpdateManyWithWhereWithoutPatientInput | EducationHistoryUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: EducationHistoryScalarWhereInput | EducationHistoryScalarWhereInput[]
  }

  export type EmploymentHistoryUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<EmploymentHistoryCreateWithoutPatientInput, EmploymentHistoryUncheckedCreateWithoutPatientInput> | EmploymentHistoryCreateWithoutPatientInput[] | EmploymentHistoryUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: EmploymentHistoryCreateOrConnectWithoutPatientInput | EmploymentHistoryCreateOrConnectWithoutPatientInput[]
    upsert?: EmploymentHistoryUpsertWithWhereUniqueWithoutPatientInput | EmploymentHistoryUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: EmploymentHistoryCreateManyPatientInputEnvelope
    set?: EmploymentHistoryWhereUniqueInput | EmploymentHistoryWhereUniqueInput[]
    disconnect?: EmploymentHistoryWhereUniqueInput | EmploymentHistoryWhereUniqueInput[]
    delete?: EmploymentHistoryWhereUniqueInput | EmploymentHistoryWhereUniqueInput[]
    connect?: EmploymentHistoryWhereUniqueInput | EmploymentHistoryWhereUniqueInput[]
    update?: EmploymentHistoryUpdateWithWhereUniqueWithoutPatientInput | EmploymentHistoryUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: EmploymentHistoryUpdateManyWithWhereWithoutPatientInput | EmploymentHistoryUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: EmploymentHistoryScalarWhereInput | EmploymentHistoryScalarWhereInput[]
  }

  export type PatientCreateNestedOneWithoutMedicalRecordsInput = {
    create?: XOR<PatientCreateWithoutMedicalRecordsInput, PatientUncheckedCreateWithoutMedicalRecordsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutMedicalRecordsInput
    connect?: PatientWhereUniqueInput
  }

  export type PatientUpdateOneRequiredWithoutMedicalRecordsNestedInput = {
    create?: XOR<PatientCreateWithoutMedicalRecordsInput, PatientUncheckedCreateWithoutMedicalRecordsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutMedicalRecordsInput
    upsert?: PatientUpsertWithoutMedicalRecordsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutMedicalRecordsInput, PatientUpdateWithoutMedicalRecordsInput>, PatientUncheckedUpdateWithoutMedicalRecordsInput>
  }

  export type PatientCreateNestedOneWithoutEducationHistoryInput = {
    create?: XOR<PatientCreateWithoutEducationHistoryInput, PatientUncheckedCreateWithoutEducationHistoryInput>
    connectOrCreate?: PatientCreateOrConnectWithoutEducationHistoryInput
    connect?: PatientWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PatientUpdateOneRequiredWithoutEducationHistoryNestedInput = {
    create?: XOR<PatientCreateWithoutEducationHistoryInput, PatientUncheckedCreateWithoutEducationHistoryInput>
    connectOrCreate?: PatientCreateOrConnectWithoutEducationHistoryInput
    upsert?: PatientUpsertWithoutEducationHistoryInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutEducationHistoryInput, PatientUpdateWithoutEducationHistoryInput>, PatientUncheckedUpdateWithoutEducationHistoryInput>
  }

  export type PatientCreateNestedOneWithoutEmploymentHistoryInput = {
    create?: XOR<PatientCreateWithoutEmploymentHistoryInput, PatientUncheckedCreateWithoutEmploymentHistoryInput>
    connectOrCreate?: PatientCreateOrConnectWithoutEmploymentHistoryInput
    connect?: PatientWhereUniqueInput
  }

  export type PatientUpdateOneRequiredWithoutEmploymentHistoryNestedInput = {
    create?: XOR<PatientCreateWithoutEmploymentHistoryInput, PatientUncheckedCreateWithoutEmploymentHistoryInput>
    connectOrCreate?: PatientCreateOrConnectWithoutEmploymentHistoryInput
    upsert?: PatientUpsertWithoutEmploymentHistoryInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutEmploymentHistoryInput, PatientUpdateWithoutEmploymentHistoryInput>, PatientUncheckedUpdateWithoutEmploymentHistoryInput>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type MedicalRecordCreateWithoutPatientInput = {
    record_id?: string
    visit_date: Date | string
    provider: string
    visit_reason: string
    diagnosis?: string | null
    treatment?: string | null
    medications?: string | null
    allergies?: string | null
    vaccination_status?: string | null
    notes?: string | null
  }

  export type MedicalRecordUncheckedCreateWithoutPatientInput = {
    record_id?: string
    visit_date: Date | string
    provider: string
    visit_reason: string
    diagnosis?: string | null
    treatment?: string | null
    medications?: string | null
    allergies?: string | null
    vaccination_status?: string | null
    notes?: string | null
  }

  export type MedicalRecordCreateOrConnectWithoutPatientInput = {
    where: MedicalRecordWhereUniqueInput
    create: XOR<MedicalRecordCreateWithoutPatientInput, MedicalRecordUncheckedCreateWithoutPatientInput>
  }

  export type MedicalRecordCreateManyPatientInputEnvelope = {
    data: MedicalRecordCreateManyPatientInput | MedicalRecordCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type EducationHistoryCreateWithoutPatientInput = {
    education_id?: string
    institution_names: string
    qualification: string
    start_date: Date | string
    end_date?: Date | string | null
    notes?: string | null
  }

  export type EducationHistoryUncheckedCreateWithoutPatientInput = {
    education_id?: string
    institution_names: string
    qualification: string
    start_date: Date | string
    end_date?: Date | string | null
    notes?: string | null
  }

  export type EducationHistoryCreateOrConnectWithoutPatientInput = {
    where: EducationHistoryWhereUniqueInput
    create: XOR<EducationHistoryCreateWithoutPatientInput, EducationHistoryUncheckedCreateWithoutPatientInput>
  }

  export type EducationHistoryCreateManyPatientInputEnvelope = {
    data: EducationHistoryCreateManyPatientInput | EducationHistoryCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type EmploymentHistoryCreateWithoutPatientInput = {
    employment_id?: string
    employer_name: string
    job_title: string
    start_date: Date | string
    end_date?: Date | string | null
    employment_status: string
    notes?: string | null
  }

  export type EmploymentHistoryUncheckedCreateWithoutPatientInput = {
    employment_id?: string
    employer_name: string
    job_title: string
    start_date: Date | string
    end_date?: Date | string | null
    employment_status: string
    notes?: string | null
  }

  export type EmploymentHistoryCreateOrConnectWithoutPatientInput = {
    where: EmploymentHistoryWhereUniqueInput
    create: XOR<EmploymentHistoryCreateWithoutPatientInput, EmploymentHistoryUncheckedCreateWithoutPatientInput>
  }

  export type EmploymentHistoryCreateManyPatientInputEnvelope = {
    data: EmploymentHistoryCreateManyPatientInput | EmploymentHistoryCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type MedicalRecordUpsertWithWhereUniqueWithoutPatientInput = {
    where: MedicalRecordWhereUniqueInput
    update: XOR<MedicalRecordUpdateWithoutPatientInput, MedicalRecordUncheckedUpdateWithoutPatientInput>
    create: XOR<MedicalRecordCreateWithoutPatientInput, MedicalRecordUncheckedCreateWithoutPatientInput>
  }

  export type MedicalRecordUpdateWithWhereUniqueWithoutPatientInput = {
    where: MedicalRecordWhereUniqueInput
    data: XOR<MedicalRecordUpdateWithoutPatientInput, MedicalRecordUncheckedUpdateWithoutPatientInput>
  }

  export type MedicalRecordUpdateManyWithWhereWithoutPatientInput = {
    where: MedicalRecordScalarWhereInput
    data: XOR<MedicalRecordUpdateManyMutationInput, MedicalRecordUncheckedUpdateManyWithoutPatientInput>
  }

  export type MedicalRecordScalarWhereInput = {
    AND?: MedicalRecordScalarWhereInput | MedicalRecordScalarWhereInput[]
    OR?: MedicalRecordScalarWhereInput[]
    NOT?: MedicalRecordScalarWhereInput | MedicalRecordScalarWhereInput[]
    record_id?: StringFilter<"MedicalRecord"> | string
    patient_id?: StringFilter<"MedicalRecord"> | string
    visit_date?: DateTimeFilter<"MedicalRecord"> | Date | string
    provider?: StringFilter<"MedicalRecord"> | string
    visit_reason?: StringFilter<"MedicalRecord"> | string
    diagnosis?: StringNullableFilter<"MedicalRecord"> | string | null
    treatment?: StringNullableFilter<"MedicalRecord"> | string | null
    medications?: StringNullableFilter<"MedicalRecord"> | string | null
    allergies?: StringNullableFilter<"MedicalRecord"> | string | null
    vaccination_status?: StringNullableFilter<"MedicalRecord"> | string | null
    notes?: StringNullableFilter<"MedicalRecord"> | string | null
  }

  export type EducationHistoryUpsertWithWhereUniqueWithoutPatientInput = {
    where: EducationHistoryWhereUniqueInput
    update: XOR<EducationHistoryUpdateWithoutPatientInput, EducationHistoryUncheckedUpdateWithoutPatientInput>
    create: XOR<EducationHistoryCreateWithoutPatientInput, EducationHistoryUncheckedCreateWithoutPatientInput>
  }

  export type EducationHistoryUpdateWithWhereUniqueWithoutPatientInput = {
    where: EducationHistoryWhereUniqueInput
    data: XOR<EducationHistoryUpdateWithoutPatientInput, EducationHistoryUncheckedUpdateWithoutPatientInput>
  }

  export type EducationHistoryUpdateManyWithWhereWithoutPatientInput = {
    where: EducationHistoryScalarWhereInput
    data: XOR<EducationHistoryUpdateManyMutationInput, EducationHistoryUncheckedUpdateManyWithoutPatientInput>
  }

  export type EducationHistoryScalarWhereInput = {
    AND?: EducationHistoryScalarWhereInput | EducationHistoryScalarWhereInput[]
    OR?: EducationHistoryScalarWhereInput[]
    NOT?: EducationHistoryScalarWhereInput | EducationHistoryScalarWhereInput[]
    education_id?: StringFilter<"EducationHistory"> | string
    patient_id?: StringFilter<"EducationHistory"> | string
    institution_names?: StringFilter<"EducationHistory"> | string
    qualification?: StringFilter<"EducationHistory"> | string
    start_date?: DateTimeFilter<"EducationHistory"> | Date | string
    end_date?: DateTimeNullableFilter<"EducationHistory"> | Date | string | null
    notes?: StringNullableFilter<"EducationHistory"> | string | null
  }

  export type EmploymentHistoryUpsertWithWhereUniqueWithoutPatientInput = {
    where: EmploymentHistoryWhereUniqueInput
    update: XOR<EmploymentHistoryUpdateWithoutPatientInput, EmploymentHistoryUncheckedUpdateWithoutPatientInput>
    create: XOR<EmploymentHistoryCreateWithoutPatientInput, EmploymentHistoryUncheckedCreateWithoutPatientInput>
  }

  export type EmploymentHistoryUpdateWithWhereUniqueWithoutPatientInput = {
    where: EmploymentHistoryWhereUniqueInput
    data: XOR<EmploymentHistoryUpdateWithoutPatientInput, EmploymentHistoryUncheckedUpdateWithoutPatientInput>
  }

  export type EmploymentHistoryUpdateManyWithWhereWithoutPatientInput = {
    where: EmploymentHistoryScalarWhereInput
    data: XOR<EmploymentHistoryUpdateManyMutationInput, EmploymentHistoryUncheckedUpdateManyWithoutPatientInput>
  }

  export type EmploymentHistoryScalarWhereInput = {
    AND?: EmploymentHistoryScalarWhereInput | EmploymentHistoryScalarWhereInput[]
    OR?: EmploymentHistoryScalarWhereInput[]
    NOT?: EmploymentHistoryScalarWhereInput | EmploymentHistoryScalarWhereInput[]
    employment_id?: StringFilter<"EmploymentHistory"> | string
    patient_id?: StringFilter<"EmploymentHistory"> | string
    employer_name?: StringFilter<"EmploymentHistory"> | string
    job_title?: StringFilter<"EmploymentHistory"> | string
    start_date?: DateTimeFilter<"EmploymentHistory"> | Date | string
    end_date?: DateTimeNullableFilter<"EmploymentHistory"> | Date | string | null
    employment_status?: StringFilter<"EmploymentHistory"> | string
    notes?: StringNullableFilter<"EmploymentHistory"> | string | null
  }

  export type PatientCreateWithoutMedicalRecordsInput = {
    patient_id?: string
    owner_id: string
    first_name: string
    middle_name?: string | null
    last_name: string
    date_of_birth: Date | string
    gender: string
    nationality: string
    ethnicity?: string | null
    place_of_birth: string
    id_type: string
    government_id: string
    contact_phone?: string | null
    contact_email?: string | null
    address_line1: string
    address_line2?: string | null
    city: string
    parish: string
    postal_code?: string | null
    country: string
    created_at?: Date | string
    updated_at?: Date | string
    educationHistory?: EducationHistoryCreateNestedManyWithoutPatientInput
    employmentHistory?: EmploymentHistoryCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutMedicalRecordsInput = {
    patient_id?: string
    owner_id: string
    first_name: string
    middle_name?: string | null
    last_name: string
    date_of_birth: Date | string
    gender: string
    nationality: string
    ethnicity?: string | null
    place_of_birth: string
    id_type: string
    government_id: string
    contact_phone?: string | null
    contact_email?: string | null
    address_line1: string
    address_line2?: string | null
    city: string
    parish: string
    postal_code?: string | null
    country: string
    created_at?: Date | string
    updated_at?: Date | string
    educationHistory?: EducationHistoryUncheckedCreateNestedManyWithoutPatientInput
    employmentHistory?: EmploymentHistoryUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutMedicalRecordsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutMedicalRecordsInput, PatientUncheckedCreateWithoutMedicalRecordsInput>
  }

  export type PatientUpsertWithoutMedicalRecordsInput = {
    update: XOR<PatientUpdateWithoutMedicalRecordsInput, PatientUncheckedUpdateWithoutMedicalRecordsInput>
    create: XOR<PatientCreateWithoutMedicalRecordsInput, PatientUncheckedCreateWithoutMedicalRecordsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutMedicalRecordsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutMedicalRecordsInput, PatientUncheckedUpdateWithoutMedicalRecordsInput>
  }

  export type PatientUpdateWithoutMedicalRecordsInput = {
    patient_id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    place_of_birth?: StringFieldUpdateOperationsInput | string
    id_type?: StringFieldUpdateOperationsInput | string
    government_id?: StringFieldUpdateOperationsInput | string
    contact_phone?: NullableStringFieldUpdateOperationsInput | string | null
    contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    address_line1?: StringFieldUpdateOperationsInput | string
    address_line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    parish?: StringFieldUpdateOperationsInput | string
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    educationHistory?: EducationHistoryUpdateManyWithoutPatientNestedInput
    employmentHistory?: EmploymentHistoryUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutMedicalRecordsInput = {
    patient_id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    place_of_birth?: StringFieldUpdateOperationsInput | string
    id_type?: StringFieldUpdateOperationsInput | string
    government_id?: StringFieldUpdateOperationsInput | string
    contact_phone?: NullableStringFieldUpdateOperationsInput | string | null
    contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    address_line1?: StringFieldUpdateOperationsInput | string
    address_line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    parish?: StringFieldUpdateOperationsInput | string
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    educationHistory?: EducationHistoryUncheckedUpdateManyWithoutPatientNestedInput
    employmentHistory?: EmploymentHistoryUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateWithoutEducationHistoryInput = {
    patient_id?: string
    owner_id: string
    first_name: string
    middle_name?: string | null
    last_name: string
    date_of_birth: Date | string
    gender: string
    nationality: string
    ethnicity?: string | null
    place_of_birth: string
    id_type: string
    government_id: string
    contact_phone?: string | null
    contact_email?: string | null
    address_line1: string
    address_line2?: string | null
    city: string
    parish: string
    postal_code?: string | null
    country: string
    created_at?: Date | string
    updated_at?: Date | string
    medicalRecords?: MedicalRecordCreateNestedManyWithoutPatientInput
    employmentHistory?: EmploymentHistoryCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutEducationHistoryInput = {
    patient_id?: string
    owner_id: string
    first_name: string
    middle_name?: string | null
    last_name: string
    date_of_birth: Date | string
    gender: string
    nationality: string
    ethnicity?: string | null
    place_of_birth: string
    id_type: string
    government_id: string
    contact_phone?: string | null
    contact_email?: string | null
    address_line1: string
    address_line2?: string | null
    city: string
    parish: string
    postal_code?: string | null
    country: string
    created_at?: Date | string
    updated_at?: Date | string
    medicalRecords?: MedicalRecordUncheckedCreateNestedManyWithoutPatientInput
    employmentHistory?: EmploymentHistoryUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutEducationHistoryInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutEducationHistoryInput, PatientUncheckedCreateWithoutEducationHistoryInput>
  }

  export type PatientUpsertWithoutEducationHistoryInput = {
    update: XOR<PatientUpdateWithoutEducationHistoryInput, PatientUncheckedUpdateWithoutEducationHistoryInput>
    create: XOR<PatientCreateWithoutEducationHistoryInput, PatientUncheckedCreateWithoutEducationHistoryInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutEducationHistoryInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutEducationHistoryInput, PatientUncheckedUpdateWithoutEducationHistoryInput>
  }

  export type PatientUpdateWithoutEducationHistoryInput = {
    patient_id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    place_of_birth?: StringFieldUpdateOperationsInput | string
    id_type?: StringFieldUpdateOperationsInput | string
    government_id?: StringFieldUpdateOperationsInput | string
    contact_phone?: NullableStringFieldUpdateOperationsInput | string | null
    contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    address_line1?: StringFieldUpdateOperationsInput | string
    address_line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    parish?: StringFieldUpdateOperationsInput | string
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalRecords?: MedicalRecordUpdateManyWithoutPatientNestedInput
    employmentHistory?: EmploymentHistoryUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutEducationHistoryInput = {
    patient_id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    place_of_birth?: StringFieldUpdateOperationsInput | string
    id_type?: StringFieldUpdateOperationsInput | string
    government_id?: StringFieldUpdateOperationsInput | string
    contact_phone?: NullableStringFieldUpdateOperationsInput | string | null
    contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    address_line1?: StringFieldUpdateOperationsInput | string
    address_line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    parish?: StringFieldUpdateOperationsInput | string
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalRecords?: MedicalRecordUncheckedUpdateManyWithoutPatientNestedInput
    employmentHistory?: EmploymentHistoryUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateWithoutEmploymentHistoryInput = {
    patient_id?: string
    owner_id: string
    first_name: string
    middle_name?: string | null
    last_name: string
    date_of_birth: Date | string
    gender: string
    nationality: string
    ethnicity?: string | null
    place_of_birth: string
    id_type: string
    government_id: string
    contact_phone?: string | null
    contact_email?: string | null
    address_line1: string
    address_line2?: string | null
    city: string
    parish: string
    postal_code?: string | null
    country: string
    created_at?: Date | string
    updated_at?: Date | string
    medicalRecords?: MedicalRecordCreateNestedManyWithoutPatientInput
    educationHistory?: EducationHistoryCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutEmploymentHistoryInput = {
    patient_id?: string
    owner_id: string
    first_name: string
    middle_name?: string | null
    last_name: string
    date_of_birth: Date | string
    gender: string
    nationality: string
    ethnicity?: string | null
    place_of_birth: string
    id_type: string
    government_id: string
    contact_phone?: string | null
    contact_email?: string | null
    address_line1: string
    address_line2?: string | null
    city: string
    parish: string
    postal_code?: string | null
    country: string
    created_at?: Date | string
    updated_at?: Date | string
    medicalRecords?: MedicalRecordUncheckedCreateNestedManyWithoutPatientInput
    educationHistory?: EducationHistoryUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutEmploymentHistoryInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutEmploymentHistoryInput, PatientUncheckedCreateWithoutEmploymentHistoryInput>
  }

  export type PatientUpsertWithoutEmploymentHistoryInput = {
    update: XOR<PatientUpdateWithoutEmploymentHistoryInput, PatientUncheckedUpdateWithoutEmploymentHistoryInput>
    create: XOR<PatientCreateWithoutEmploymentHistoryInput, PatientUncheckedCreateWithoutEmploymentHistoryInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutEmploymentHistoryInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutEmploymentHistoryInput, PatientUncheckedUpdateWithoutEmploymentHistoryInput>
  }

  export type PatientUpdateWithoutEmploymentHistoryInput = {
    patient_id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    place_of_birth?: StringFieldUpdateOperationsInput | string
    id_type?: StringFieldUpdateOperationsInput | string
    government_id?: StringFieldUpdateOperationsInput | string
    contact_phone?: NullableStringFieldUpdateOperationsInput | string | null
    contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    address_line1?: StringFieldUpdateOperationsInput | string
    address_line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    parish?: StringFieldUpdateOperationsInput | string
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalRecords?: MedicalRecordUpdateManyWithoutPatientNestedInput
    educationHistory?: EducationHistoryUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutEmploymentHistoryInput = {
    patient_id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    place_of_birth?: StringFieldUpdateOperationsInput | string
    id_type?: StringFieldUpdateOperationsInput | string
    government_id?: StringFieldUpdateOperationsInput | string
    contact_phone?: NullableStringFieldUpdateOperationsInput | string | null
    contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    address_line1?: StringFieldUpdateOperationsInput | string
    address_line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    parish?: StringFieldUpdateOperationsInput | string
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalRecords?: MedicalRecordUncheckedUpdateManyWithoutPatientNestedInput
    educationHistory?: EducationHistoryUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type MedicalRecordCreateManyPatientInput = {
    record_id?: string
    visit_date: Date | string
    provider: string
    visit_reason: string
    diagnosis?: string | null
    treatment?: string | null
    medications?: string | null
    allergies?: string | null
    vaccination_status?: string | null
    notes?: string | null
  }

  export type EducationHistoryCreateManyPatientInput = {
    education_id?: string
    institution_names: string
    qualification: string
    start_date: Date | string
    end_date?: Date | string | null
    notes?: string | null
  }

  export type EmploymentHistoryCreateManyPatientInput = {
    employment_id?: string
    employer_name: string
    job_title: string
    start_date: Date | string
    end_date?: Date | string | null
    employment_status: string
    notes?: string | null
  }

  export type MedicalRecordUpdateWithoutPatientInput = {
    record_id?: StringFieldUpdateOperationsInput | string
    visit_date?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: StringFieldUpdateOperationsInput | string
    visit_reason?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    treatment?: NullableStringFieldUpdateOperationsInput | string | null
    medications?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    vaccination_status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicalRecordUncheckedUpdateWithoutPatientInput = {
    record_id?: StringFieldUpdateOperationsInput | string
    visit_date?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: StringFieldUpdateOperationsInput | string
    visit_reason?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    treatment?: NullableStringFieldUpdateOperationsInput | string | null
    medications?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    vaccination_status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicalRecordUncheckedUpdateManyWithoutPatientInput = {
    record_id?: StringFieldUpdateOperationsInput | string
    visit_date?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: StringFieldUpdateOperationsInput | string
    visit_reason?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    treatment?: NullableStringFieldUpdateOperationsInput | string | null
    medications?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    vaccination_status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationHistoryUpdateWithoutPatientInput = {
    education_id?: StringFieldUpdateOperationsInput | string
    institution_names?: StringFieldUpdateOperationsInput | string
    qualification?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationHistoryUncheckedUpdateWithoutPatientInput = {
    education_id?: StringFieldUpdateOperationsInput | string
    institution_names?: StringFieldUpdateOperationsInput | string
    qualification?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationHistoryUncheckedUpdateManyWithoutPatientInput = {
    education_id?: StringFieldUpdateOperationsInput | string
    institution_names?: StringFieldUpdateOperationsInput | string
    qualification?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmploymentHistoryUpdateWithoutPatientInput = {
    employment_id?: StringFieldUpdateOperationsInput | string
    employer_name?: StringFieldUpdateOperationsInput | string
    job_title?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employment_status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmploymentHistoryUncheckedUpdateWithoutPatientInput = {
    employment_id?: StringFieldUpdateOperationsInput | string
    employer_name?: StringFieldUpdateOperationsInput | string
    job_title?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employment_status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmploymentHistoryUncheckedUpdateManyWithoutPatientInput = {
    employment_id?: StringFieldUpdateOperationsInput | string
    employer_name?: StringFieldUpdateOperationsInput | string
    job_title?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employment_status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
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