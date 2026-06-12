# Day 2 - Playwright Fixtures, Reports & Debugging

## Project Information

**Framework:** Playwright with TypeScript  
**Applications Under Test:**
- https://demoqa.com/browser-windows
- https://demoqa.com/books

**Tools Used**
- HTML Report
- Trace Viewer
- Playwright Inspector
- Screenshots
- Videos
- Console Logs

---

# Failure Category 1 – Locator Not Found

## Root Cause
An incorrect locator was used and no matching element existed.

## Steps to Simulate
1. Open Books page.
2. Use `#wrongLocator`.
3. Perform click action.

## Failure Log

```text
Error: locator.click: Test timeout of 30000ms exceeded.
    Call log:
      - waiting for locator('#wrongLocator')


       7 |
       8 |         await page.goto('/books');
    >  9 |         await page.locator('#wrongLocator').click();
         |                                             ^
      10 |
      11 |     });
      12 |
        at C:\Users\swayam.singh\Desktop\QA\tests\failures.spec.ts:9:45
```

## Tool Used
Trace Viewer

## Learning
Always validate locators before implementing actions.

## Output
![Locator](/part2_day2/output/locator%20not%20found%20trace.png)
---

# Failure Category 2 – Assertion Failure

## Root Cause
Expected text differed from actual UI text.

## Steps to Simulate
1. Open Books page.
2. Validate book title using incorrect expected value.

## Failure Log

```text
Error: expect(locator).toHaveText(expected) failed

    Locator:  getByText('Git Pocket Guide')
    Expected: "Wrong Book"
    Received: "Git Pocket Guide"
    Timeout:  5000ms

    Call log:
      - Expect "toHaveText" with timeout 5000ms
      - waiting for getByText('Git Pocket Guide')
        10 × locator resolved to <a data-discover="true" href="/books?search=9781449325862">Git Pocket Guide</a>
           - unexpected value "Git Pocket Guide"


      14 |
      15 |         await page.goto('/books');
    > 16 |         await expect(page.getByText('Git Pocket Guide')).toHaveText('Wrong Book');
         |                                                          ^
      17 |
      18 |     });
      19 |
        at C:\Users\swayam.singh\Desktop\QA\tests\failures.spec.ts:16:58
```

## Tool Used
HTML Report

## Learning
Assertions should reflect actual business requirements.

## Output
![Assertion](/part2_day2/output/assertion%20trace.png)

---

# Failure Category 3 – URL Mismatch

## Root Cause
Incorrect URL used in validation.

## Steps to Simulate
1. Navigate to Books page.
2. Assert a wrong URL.

## Failure Log

```text
 Error: expect(page).toHaveURL(expected) failed

    Expected: "https://demoqa.com/wrong-url"
    Received: "https://demoqa.com/books"
    Timeout:  5000ms

    Call log:
      - Expect "toHaveURL" with timeout 5000ms
        13 × unexpected value "https://demoqa.com/books"


      21 |
      22 |         await page.goto('/books');
    > 23 |         await expect(page).toHaveURL('/wrong-url');
         |                            ^
      24 |
      25 |     });
      26 |
        at C:\Users\swayam.singh\Desktop\QA\tests\failures.spec.ts:23:28
```

## Tool Used
Trace Viewer

## Learning
Validate URLs against actual navigation flow.

## Output
![URL](/part2_day2/output/URL%20mismatch%20trace.png)

---

# Failure Category 4 – Element Visibility Failure

## Root Cause
Visibility assertion executed on a missing element.

## Steps to Simulate
1. Open Books page.
2. Validate visibility of a non-existent element.

## Failure Log

```text
Error: expect(locator).toBeVisible() failed

    Locator: locator('#hiddenElement')
    Expected: visible
    Timeout: 5000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" with timeout 5000ms
      - waiting for locator('#hiddenElement')


      28 |
      29 |         await page.goto('/books');
    > 30 |         await expect(page.locator('#hiddenElement')).toBeVisible();
         |                                                      ^
      31 |
      32 |     });
      33 |
        at C:\Users\swayam.singh\Desktop\QA\tests\failures.spec.ts:30:54
```

## Tool Used
Inspector

## Learning
Ensure locator resolves before visibility validation.

## Output
![elementVisibilty](/part2_day2/output/Element%20visibility%20failure%20trace.png)
---

# Failure Category 5 – Element Count Failure

## Root Cause
Expected count did not match actual count.

## Steps to Simulate
1. Open Books page.
2. Validate an unrealistic count.

## Failure Log

```text
 Error: expect(locator).toHaveCount(expected) failed

    Locator:  locator('.rt-tr-group')
    Expected: 50
    Received: 0
    Timeout:  5000ms

    Call log:
      - Expect "toHaveCount" with timeout 5000ms
      - waiting for locator('.rt-tr-group')
        14 × locator resolved to 0 elements
           - unexpected value "0"


      35 |
      36 |         await page.goto('/books');
    > 37 |         await expect(page.locator('.rt-tr-group')).toHaveCount(50);
         |                                                    ^
      38 |     
      39 |     });
      40 |
        at C:\Users\swayam.singh\Desktop\QA\tests\failures.spec.ts:37:52
```

## Tool Used
HTML Report

## Learning
Count assertions should be based on application behavior.

## Output
![elementCount](/part2_day2/output/Element%20Count%20failure%20trace.png)
---

# Failure Category 6 – Text Validation Failure

## Root Cause
Expected heading text was incorrect.

## Steps to Simulate
1. Open Browser Windows page.
2. Validate incorrect heading text.

## Failure Log
```text
Error: expect(locator).toHaveText(expected) failed

    Locator:  locator('h1')
    Expected: "Incorrect Heading"
    Received: "Browser Windows"
    Timeout:  5000ms

    Call log:
      - Expect "toHaveText" with timeout 5000ms
      - waiting for locator('h1')
        14 × locator resolved to <h1 class="text-center">Browser Windows</h1>
           - unexpected value "Browser Windows"


      42 |
      43 |         await page.goto('/browser-windows');
    > 44 |         await expect(page.locator('h1')).toHaveText('Incorrect Heading');
         |                                          ^
      45 |     
      46 |     });
      47 |
        at C:\Users\swayam.singh\Desktop\QA\tests\failures.spec.ts:44:42
```

## Tool Used
Screenshot + HTML Report

## Learning
Text validations should use correct expected values.

## Output
![textValidation](/part2_day2/output/Text%20Validation%20failure.png)
---

# Failure Category 7 – Network Failure

## Root Cause
Request intentionally aborted using route.abort().

## Steps to Simulate
1. Intercept Books API.
2. Abort request.
3. Validate book data.

## Failure Log

```text
Error: expect(locator).toBeVisible() failed

    Locator: getByText('Git Pocket Guide')
    Expected: visible
    Timeout: 5000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" with timeout 5000ms
      - waiting for getByText('Git Pocket Guide')


      50 |         await page.route('**/BookStore/v1/Books', route => route.abort());
      51 |         await page.goto('/books');
    > 52 |         await expect(page.getByText('Git Pocket Guide')).toBeVisible();
         |                                                          ^
      53 |     
      54 |     });
      55 |
        at C:\Users\swayam.singh\Desktop\QA\tests\failures.spec.ts:52:58
```

## Tool Used
Trace Viewer

## Learning
Applications should handle API failures gracefully.

## Output
![network](/part2_day2/output/Network%20failure%20trace.png)
---

# Failure Category 8 – Missing Element Interaction

## Root Cause
Click attempted on a non-existent element.

## Steps to Simulate
1. Open Browser Windows page.
2. Click fake locator.

## Failure Log
```text
Error: locator.click: Test timeout of 30000ms exceeded.
    Call log:
      - waiting for locator('#fakeButton')


      57 |         
      58 |         await page.goto('/browser-windows');
    > 59 |         await page.locator('#fakeButton').click();
         |                                           ^
      60 |     
      61 |     });
      62 |
        at C:\Users\swayam.singh\Desktop\QA\tests\failures.spec.ts:59:43
```

## Tool Used
Inspector

## Learning
Validate existence before interaction.

## Output
![missingElement](/part2_day2/output/Missing%20element%20failure%20trace.png)
---

# Timeout Category 1 – Test Timeout

## Root Cause
Test execution exceeded configured timeout.

## Steps to Simulate
1. Set timeout to 3 seconds.
2. Delay execution for 5 seconds.

## Failure Log

```text
Error: page.waitForTimeout: Test timeout of 3000ms exceeded.

       7 |         
       8 |         test.setTimeout(3000);
    >  9 |         await page.waitForTimeout(5000);
         |                    ^
      10 |     });
      11 |
      12 |     test('Expect Timeout', async ({ page }) => {
        at C:\Users\swayam.singh\Desktop\QA\tests\timeouts.spec.ts:9:20
```

## Learning
Avoid unnecessary delays in tests.

## Output
![test](/part2_day2/output/test%20timeout.png)
---

# Timeout Category 2 – Expect Timeout

## Root Cause
Element never became visible.

## Steps to Simulate
1. Open Books page.
2. Validate visibility of missing element.
3. Set short expect timeout.

## Failure Log

```text
Error: expect(locator).toBeVisible() failed

    Locator: locator('#doesNotExist')
    Expected: visible
    Timeout: 2000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" with timeout 2000ms
      - waiting for locator('#doesNotExist')


      13 |         
      14 |         await page.goto('/books');
    > 15 |         await expect(page.locator('#doesNotExist')).toBeVisible({timeout: 2000});
         |                                                     ^
      16 |     
      17 |     });
      18 |
        at C:\Users\swayam.singh\Desktop\QA\tests\timeouts.spec.ts:15:53
```

## Learning
Use realistic assertion timeouts.

## Output
![expect](/part2_day2/output/expect%20timeout.png)
---

# Timeout Category 3 – Action Timeout

## Root Cause
Action could not complete within configured timeout.

## Steps to Simulate
1. Set low default timeout.
2. Click invalid locator.

## Failure Log

```text
TimeoutError: page.goto: Timeout 1000ms exceeded.
    Call log:
      - navigating to "https://demoqa.com/books", waiting until "load"


      20 |         
      21 |         page.setDefaultTimeout(1000);
    > 22 |         await page.goto('/books');
         |                    ^
      23 |         await page.locator('#fakeButton').click();
      24 |     
      25 |     });
        at C:\Users\swayam.singh\Desktop\QA\tests\timeouts.spec.ts:22:20
```

## Learning
Action timeouts often indicate locator or synchronization issues.

## Output
![action](/part2_day2/output/action%20timeout.png)
---

# Timeout Category 4 – Navigation Timeout

## Root Cause
Navigation exceeded configured limit.

## Steps to Simulate
1. Set navigation timeout to an extremely small value.
2. Navigate to application URL.

## Failure Log

```text
TimeoutError: page.goto: Timeout 1ms exceeded.
    Call log:
      - navigating to "https://demoqa.com/books", waiting until "load"


      28 |         
      29 |         page.setDefaultNavigationTimeout(1);
    > 30 |         await page.goto('https://demoqa.com/books');
         |                    ^
      31 |     
      32 |     });
      33 |
        at C:\Users\swayam.singh\Desktop\QA\tests\timeouts.spec.ts:30:20
```

## Learning
Navigation timeouts should account for realistic page load times.

## Output
![navigation](/part2_day2/output/navigation%20timeout.png)
---

# Summary

| Category | Count |
|----------|-------|
| Failure Categories | 8 |
| Timeout Categories | 4 |
| Total Scenarios | 12 |

## Evidence Generated

- HTML Reports
- Trace Files
- Screenshots
- Console Logs

## Key Learning

Playwright debugging tools provide detailed execution data that helps quickly identify locator issues, assertion failures, network problems, and timeout-related defects.
