
# <----------------- Checking Duplicate in numbers ------------------->

def containDuplicate(self, nums):
    hashset = set()
    for n in nums:
        if n in hashset:
            return True
        hashset.add(n)
    return False;
