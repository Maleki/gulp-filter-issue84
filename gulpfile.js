var gulp = require('gulp'),
    filter = require('gulp-filter');


gulp.task('filter', function(){
    newTag = "v1.0.0.20";
     var answer = JSON.parse('{"version":"v1.0.0.19","commitHash":"e3f286806|Somg Guy|2017-08-24T19:22:59-04:00|fix","sqlFiles":["Database/Current Scripts/0101_DictionaryInsert_TaskStatus.sql","Database/Current Scripts/5000_PersonInsert.sql","Database/Stored Procedures/AddPermissionExclude.sql","Database/Stored Procedures/PaymentListForGrid.sql"]}');
     var f = filter(['**/*Status.sql'], { debug: true });

     return gulp.src(answer.sqlFiles)
        .pipe(gulp.dest(`.\\Database\\Archived Scripts\\v01_00\\${newTag}`))
        .pipe(f)
        .pipe(gulp.dest(`.\\Database\\Archived Scripts\\v01_00\\${newTag}_Current`));
});

gulp.task('filter_test', function(){
    newTag = "v1.0.0.20";
     var answer = JSON.parse('{"version":"v1.0.0.19","commitHash":"e3f286806|Some Guy|2017-08-24T19:22:59-04:00|fix","sqlFiles":["Database/Current Scripts/0101_DictionaryInsert_ManualTaskStatus.sql","Database/Current Scripts/5000_PhysicianInsert.sql","Database/Stored Procedures/AddReportPermissionExclude.sql","Database/Stored Procedures/AgreementToPaymentListForGrid.sql"]}');
     var f = filter(['**/Current Scripts/*.sql'], { debug: true });

     return gulp.src(answer.sqlFiles)
        .pipe(gulp.dest(`.\\Database\\Archived Scripts\\v01_00\\${newTag}`))
        .pipe(f)
        .pipe(gulp.dest(`.\\Database\\Archived Scripts\\v01_00\\${newTag}_Current`));
     
});