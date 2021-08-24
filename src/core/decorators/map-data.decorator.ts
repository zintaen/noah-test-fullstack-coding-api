import { ClassConstructor, ClassTransformer } from 'class-transformer';

// part of this comes from the class-transform library, I just added array transform support
export function MapData<T>(classType: ClassConstructor<T>): MethodDecorator {
  return function (
    target: Record<string, any>,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ): void {
    const classTransformer: ClassTransformer = new ClassTransformer();
    const originalMethod = descriptor.value;

    const transform = (data: any[] | any) => {
      if (Array.isArray(data)) {
        return data.map((_d) => classTransformer.plainToClass(classType, _d));
      }

      return classTransformer.plainToClass(classType, data);
    };

    descriptor.value = function (...args: any[]): Record<string, any> {
      const result: any = originalMethod.apply(this, args);
      const isPromise =
        !!result &&
        (typeof result === 'object' || typeof result === 'function') &&
        typeof result.then === 'function';
      return isPromise
        ? result.then((data: any) => transform(data))
        : transform(result);
    };
  };
}
