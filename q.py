import functools
def debug(func=None, *, prefix='*'):
   if func is None:
     return functools.partial(func, prefix=prefix)
   def wrapper(*args, **argv):
     f2 = functools.wraps(func)
     print(prefix, " called", func.__qualname__)
     return func(*args, **argv)
   return wrapper

